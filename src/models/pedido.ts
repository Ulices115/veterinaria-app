// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Ipedido extends Document{
    id_pedido: string;
    rfc: string;
    cancelado:  Boolean;
    status_log:string;
    status_f:string;
    fecha:string;
    // ubicacion:string;

  }
const PedidoSchema = new Schema<Ipedido>({
    id_pedido:{
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
    status_log:{
        type:String,
        default:'carrito de compras',
    },
    status_f:{
        type:String,
        default:'no pagado',
        
    },
    facturado: {
        type: Boolean,
        default:false
    },
    cancelado: {
        type: Boolean,
        default:false
    },
    fecha:{
        type:Date,
        required:[true,'fecha es obligatoria']
    },
    ubicacion:{
        type:String,
        required:[true,'ubicacion es obligatoria']
    },
    

})

PedidoSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Pedido', PedidoSchema);