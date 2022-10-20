import { model, Schema, Document } from 'mongoose';
interface Icolonia extends Document{
    c_colonia:number;
    c_codigopostal:number;
    nombre_del_asentamiento: string;
  }
const ColoniaSchema = new Schema<Icolonia>({
    c_colonia: {
        type: Number,
        required: [true, 'c_colonia obligatorio'],
     
    },
    c_codigopostal: {
        type: Number,
        required: [true, 'c_codigopostal obligatorio'],
     
    },
    nombre_del_asentamiento: {
        type: String,
        required: [true, 'nombre del asentamiento obligatorio'],
     
    }
})

ColoniaSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Colonia', ColoniaSchema);