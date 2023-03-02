import { model, Schema, Document } from 'mongoose';
interface Ifactura extends Document{
    id_factura: string;
    id_pedido: string;
    xml:string;
  }
const FacturaSchema = new Schema<Ifactura>({
    id_factura: {
        type:String,
        required: [true, 'El id_factura es requerido']
    },
    id_pedido: {
        type: String,
        required: [true, 'El id_pedido es obligatorio']
    },
    xml: {
        type: String,
        required: [true, 'El xml es obligatorio']
    },
    pdf: {
        type: String,
        // required: [true, 'El x es obligatorio']
    },
})


module.exports = model('Factura', FacturaSchema);