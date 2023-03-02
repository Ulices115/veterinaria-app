import { model, Schema, Document } from 'mongoose';
interface Itransacciones extends Document{
    name: string;
    seq: number;
  }
const TransaccionSchema = new Schema<Itransacciones>({
    modulo: {
        type: String,
        required: [true, 'modulo obligatorio'],
    },
    transaccion: {
        type: String,
        required: [true, 'transaccion obligatorio'],
    },
    referencia: {
        type: String,
        required: [true, 'referencia obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
    },
    activo: {
        type: Boolean,
        default:true
    }

})
TransaccionSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}
module.exports = model('Transaccion', TransaccionSchema);