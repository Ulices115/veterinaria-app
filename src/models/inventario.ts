import { model, Schema, Document } from 'mongoose';
interface Iinventario extends Document{
    id_inventario:string;
    id_producto:string;
    cantidad: number;
    precio:number;
    ubicacion:string;
  }
const InventarioSchema = new Schema<Iinventario>({
    id_inventario: {
        type: String,
        required: [true, 'id inventario obligatorio'],
        unique:true
     
    },
    id_producto: {
        type: String,
        required: [true, 'id producto obligatorio'],
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
        required: [true, 'cantidad obligatorio'],
     
    },
    ubicacion: {
        type: String,
        required: [true, 'ubicación obligatorio'],
        
     
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

module.exports = model('Inventario', InventarioSchema);