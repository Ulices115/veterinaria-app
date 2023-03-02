import { model, Schema, Document } from 'mongoose';
interface Iproducto_servicio extends Document{
    id_prod_serv:string;
    descripcion:string;
    tipo:string;
  }
const Producto_servicioSchema = new Schema<Iproducto_servicio>({
    id_prod_serv: {
        type: String,
        required: [true, 'id obligatorio'],
        unique:true,

    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
     
    },
    codigo_barra: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
     
    },
    tipo: {
        type:String,
        // required: [true, 'codigo barra obligatorio'],
     
    },
    clave_unidad: {
        type:String,
        // required: [true, 'codigo barra obligatorio'],
     
    },
    unidad: {
        type:String,
        // required: [true, 'codigo barra obligatorio'],
     
    },
    clave_prod_serv: {
        type:String,
        // required: [true, 'codigo barra obligatorio'],
     
    },
    objeto_imp: {
        type:String,
        
    },
    impuesto: {
        type:String,
        
    },
    tipo_factor: {
        type:String,
        
    },
    tasa_cuota: {
        type:String,
        
    },
    activo: {
        type: Boolean,
        default:true
    }
})

Producto_servicioSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Productos_servicios', Producto_servicioSchema);