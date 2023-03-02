import { model, Schema, Document } from 'mongoose';
interface Idevolucion extends Document{
    id_devolucion:string;
    id_pedido: string;
    descripcion: string;
    cantidad_devuelta:number;
    precio: number;
    importe: number;
    fecha:Date;
    activo: Boolean;
  }

const devolucionesSchema = new Schema<Idevolucion>({
    id_devolucion:{
        type: String,
        required: [true, 'El id devolucion es obligatorio']
    },
    id_pedido:{
        type: String,
        required: [true, 'El id pedido es obligatorio']
    },
    descripcion:{
        type:String,
        required:[true,'descripcion es obligatorio']
    },
    cantidad_devuelta:{
        type:Number,
        required:[true,'La cantidad es obligatorio']
    },
    precio:{
        type:Number,
        required:[true,'El precio es obligatorio']
    },
    importe:{
        type:Number,
        required:[true,'El importe es obligatorio']
    },
    fecha:{
        type:Date,
        required:[true,'fecha requerida']
    },
    activo: {
        type: Boolean,
        default:true
    }
})

devolucionesSchema.methods.toJSON = function(){
    // si se declara aqui el activo, no se tomara en cuenta en las peticiones
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('devoluciones', devolucionesSchema);