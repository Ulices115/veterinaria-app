import { model, Schema, Document } from 'mongoose';
interface Iordendetalle extends Document{
    id_orden: string;
    producto: string;
    cantidad:number;
    activo:  Boolean;
    costo: number;
    importe: number;
  }

const OrdencompradetalleSchema = new Schema<Iordendetalle>({
    id_orden:{
        type: String,
        required: [true, 'El id es obligatorio']
    },
    producto:{
        type:String,
        required:[true,'El servicio es obligatorio']
    },
    cantidad:{
        type:Number,
        required:[true,'La cantidad es obligatorio']
    },
    costo:{
        type:Number,
        required:[true,'El costo es obligatorio']
    },
    importe:{
        type:Number,
        required:[true,'El importe es obligatorio']
    },
    activo: {
        type: Boolean,
        default:true
    }
})

OrdencompradetalleSchema.methods.toJSON = function(){
    // si se declara aqui el activo, no se tomara en cuenta en las peticiones
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Ordencompradetalle', OrdencompradetalleSchema);