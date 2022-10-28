import { model, Schema, Document } from 'mongoose';
interface Iinventario extends Document{
    id_inventario:string;
    id_prod_serv:string;
    cantidad: number;
    precio:number;
    costo:number;
    ubicacion:string;
    tipo:string;
  }
const InventarioSchema = new Schema<Iinventario>({
    id_inventario: {
        type: String,
        required: [true, 'id inventario obligatorio'],
        unique:true
     
    },
    id_prod_serv: {
        type: String,
        required: [true, 'id_prod_serv obligatorio'],
        // ref:'Producto',
    
    },
    precio: {
        type: Number,
        required: [true, 'precio obligatorio'],
     
    },
    costo: {
        type: Number,
        required: [true, 'costo obligatorio'],
     
    },
    cantidad: {
        type: Number,
        // required: [true, 'cantidad obligatorio'],
     
    },
    ubicacion: {
        type: String,
        required: [true, 'ubicación obligatorio'],
        
     
    },
    tipo: {
        type: String,
        required: [true, 'tipo obligatorio'],
        
     
    },
    activo: {
        type: Boolean,
        default:true
    }
})

InventarioSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Inventario_general', InventarioSchema);