// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iestado extends Document{
    estado: string;
    estado_fiscal: string;
    denom: string;
  }
const EstadoSchema = new Schema<Iestado>({
    estado: {
        type: String,
        require: [true, 'El idestado del estado es obligatorio'],
        unique: true    
    },
    estado_fiscal: {
        type: String,
        require: [true, 'El nombrefiscal del estado es obligatorio'],
        unique: true    
    },
    denom: {
        type: String,
        require: [true, 'El nombre del estado es obligatorio'],
        unique: true    
    }
    // activo: {
    //     type: Boolean,
    //     default:true
    // },
}) 

EstadoSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Estado', EstadoSchema);