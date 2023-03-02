import { model, Schema, Document } from 'mongoose';
interface pedido extends Document{
    id_pedido: string;
    referencia:string;
    descripcion: string;
    cantidad:number;
    activo:  Boolean;
    precio: number;
    importe: number;
    descuento:number;
  }

const PedidodetalleSchema = new Schema<pedido>({
    id_pedido:{
        type: String,
        required: [true, 'El id es obligatorio']
    },
    referencia:{
        type:String,
        required:[true,'referencia es obligatorio']
    },
    descripcion:{
        type:String,
        required:[true,'descripcion es obligatorio']
    },
    cantidad:{
        type:Number,
        required:[true,'La cantidad es obligatorio']
    },
    precio:{
        type:Number,
        required:[true,'El precio es obligatorio']
    },
    subtotal:{
        type:Number,
        required:[true,'El subtotal es obligatorio']
    },
    descuento:{
        type:Number,
        required:[true,'El descuento es obligatorio']
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

PedidodetalleSchema.methods.toJSON = function(){
    // si se declara aqui el activo, no se tomara en cuenta en las peticiones
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Pedidodetalle', PedidodetalleSchema);