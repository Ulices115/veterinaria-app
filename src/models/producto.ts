import { model, Schema, Document } from 'mongoose';
interface Iproducto extends Document{
    id_producto:string;
    descripcion:string;
  }
const ProductoSchema = new Schema<Iproducto>({
    id_producto: {
        type: String,
        required: [true, 'id obligatorio'],
        unique:true,

    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
     
    },
    codigo_barra: {
        type: Number,
        required: [true, 'codigo barra obligatorio'],
     
    },
    activo: {
        type: Boolean,
        default:true
    }
})

ProductoSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Producto', ProductoSchema);