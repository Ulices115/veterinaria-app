// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iconfiguracion extends Document{
    rfc: string;
    razon_social: string;
    regimen_f: string;
  }
const configuracionSchema = new Schema<Iconfiguracion>({
    rfc: {
        type: String,
        require: [true, 'El rfc  es obligatorio'],
   
    },
    regimen_f: {
        type: String,
        require: [true, 'El regimen fiscal es obligatorio'],
      
    },
    razon_social: {
        type: String,
        require: [true, 'La razon social es obligatorio'],
       
    },
    lugar_exp: {
        type: String,
        require: [true, 'el lugar de expedicion es obligatorio'],
 
    },
    correo: {
        type: String,
        require: [true, 'el correo es obligatorio'],
 
    },
    password: {
        type: String,
        require: [true, 'el password es obligatorio'],
 
    },
    exportacion: {
        type: String,
        require: [true, 'exportacion es obligatorio'],

    },
    moneda: {
        type: String,
        require: [true, 'la moneda es obligatorio'],
 
    },
    serie: {
        type: String,
        require: [true, 'la serie es obligatorio'],
 
    },
    tipo_comprobante: {
        type: String,
        require: [true, 'el tipo de comprobante es obligatorio'],
 
    },
    certificado: {
        type: String,
        require: [true, 'el certificado es obligatorio'],
 
    },
    key: {
        type: String,
        require: [true, 'el key es obligatorio'],
 
    },



    // activo: {
    //     type: Boolean,
    //     default:true
    // },
}) 

configuracionSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Configuracion', configuracionSchema);