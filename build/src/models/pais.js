"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Schema, model} = require('mongoose');
const mongoose_1 = require("mongoose");
const PaiseSchema = new mongoose_1.Schema({
    pais: {
        type: String,
        required: [true, 'El id es requerido']
    },
    denom: {
        type: String,
        required: [true, 'El pais es obligatorio']
    }
});
module.exports = (0, mongoose_1.model)('Paises', PaiseSchema);
