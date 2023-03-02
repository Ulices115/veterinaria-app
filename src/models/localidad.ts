// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Ilocalidad extends Document{
    c_localidad:number;
    c_estado:string;
    descripcion: string;
    fecha_inicio_vigencia:string;
    fecha_fin_vigencia:string|null;
  }
const LocalidadSchema = new Schema<Ilocalidad>({
    c_localidad: {
        type: Number,
        required: [true, 'c_localidad obligatorio'],
     
    },
    c_estado: {
        type: String,
        required: [true, 'c_estado obligatorio'],
     
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
     
    },
    fecha_inicio_vigencia: {
        type: String,
        required: [true, 'fecha obligatorio'],
     
    },
    fecha_fin_vigencia: {
        type: String,
    }
})

LocalidadSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Localidad', LocalidadSchema);