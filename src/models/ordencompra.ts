// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iorden extends Document{
    id_orden: string;
    rfc: string;
    id_b_p:string;
    ubicacion:string;
    fecha:Date;
    fecha_recibido:Date;
    status:string;
  }
const OrdencompraSchema = new Schema<Iorden>({
    id_orden:{
        type: String,
        required: [true, 'El id es obligatorio'],
        unique: true
    },
    id_b_p:{
        type: String,
        required: [true, 'El id_b_p es obligatorio'],
    },
    rfc:{
        type:String,
        required:[true,'El rfc es obligatorio']
    },
    ubicacion:{
        type:String,
        required:[true,'la ubicacion es obligatorio']
    },
    fecha:{
        type:Date,
        required:[true,'fecha es obligatoria']
    },
    recibido_por:{
        type:String,
        default:null
    },
    fecha_recibido:{
        type:Date,
        default:null
    },
    status:{
        type:String,
        default:'pendiente'
    },
    cancelado: {
        type: Boolean,
        default:false
    }

})

OrdencompraSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Ordencompra', OrdencompraSchema);