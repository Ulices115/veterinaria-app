// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Ipais extends Document{
    pais: string;
    denom: string;
  }
const PaiseSchema = new Schema<Ipais>({
    pais: {
        type:String,
        required: [true, 'El id es requerido']
    },
    denom: {
        type: String,
        required: [true, 'El pais es obligatorio']
    }
})


module.exports = model('Paises', PaiseSchema);