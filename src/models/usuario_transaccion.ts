import { model, Schema, Document } from 'mongoose';
interface Itransacciones extends Document{
    id_usuario: string;
    transaccion: string[];
  }
const TransaccionSchema = new Schema<Itransacciones>({
    transaccion: {
        type:Array,
        required: [true, 'transaccion obligatorio'],
    },
    _id_usuario: {
        type: Schema.Types.ObjectId,
        required: [true, '_id_usuario obligatorio'],
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
module.exports = model('Usuario-transaccion', TransaccionSchema);