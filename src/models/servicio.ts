// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iservicio extends Document{
    descripcion: string;
    id_servicio: string;
    activo:  Boolean;
  }
const ServicioSchema = new Schema<Iservicio>({
    descripcion: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        // unique:[true],
        
    },
    id_servicio:{
        type: String,
        required: [true, 'El id es obligatorio'],
        unique:true
    },
    activo: {
        type: Boolean,
        default:true
    }
})

ServicioSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Servicio', ServicioSchema);