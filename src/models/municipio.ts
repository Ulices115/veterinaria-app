// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Imunicipio extends Document{
    c_municipio:number;
    c_estado:string;
    descripcion: string;
    fecha_inicio_vigencia:string;
    fecha_fin_vigencia:string|null;
  }
const MunicipioSchema = new Schema<Imunicipio>({
    c_municipio: {
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

MunicipioSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Municipio', MunicipioSchema);