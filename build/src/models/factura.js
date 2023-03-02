"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FacturaSchema = new mongoose_1.Schema({
    id_factura: {
        type: String,
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
});
module.exports = (0, mongoose_1.model)('Factura', FacturaSchema);
