// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iservicio extends Document{
    id_inventario: string;
    id_servicio: string;
    costo:number;
    precio:number;
    id_ubicacion:string;
    activo:  Boolean;
  }
const Inventario_servicioSchema = new Schema<Iservicio>({
    id_inventario: {
        type: String,
        required: [true, 'El id inventario es obligatorio'],
        unique:[true],
        
    },
    id_servicio:{
        type: String,
        required: [true, 'El id servicio es obligatorio'],
        // unique:true
    },
    costo:{
        type:Number,
        required:[true,'El costo es obligatorio']
    },
    precio:{
        type:Number,
        required:[true,'El precio es obligatorio']
    },
    ubicacion:{
        type:String,
        required:[true,'la ubicacion es obligatorio']
    },
    activo: {
        type: Boolean,
        default:true
    }
})

Inventario_servicioSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('inventario_servicio', Inventario_servicioSchema);