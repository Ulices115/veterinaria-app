import { model, Schema, Document } from 'mongoose';
interface Iubicacion extends Document{
    id_ubicacion:string;
    descripcion:string;
  }
const UbicacionSchema = new Schema<Iubicacion>({
    id_ubicacion: {
        type: String,
        required: [true, 'id obligatorio'],
        unique:true
     
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

UbicacionSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Ubicacion', UbicacionSchema);