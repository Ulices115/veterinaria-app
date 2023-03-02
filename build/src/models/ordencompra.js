"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Schema, model} = require('mongoose');
const mongoose_1 = require("mongoose");
const OrdencompraSchema = new mongoose_1.Schema({
    id_orden: {
        type: String,
        required: [true, 'El id es obligatorio'],
        unique: true
    },
    id_b_p: {
        type: String,
        required: [true, 'El id_b_p es obligatorio'],
    },
    rfc: {
        type: String,
        required: [true, 'El rfc es obligatorio']
    },
    ubicacion: {
        type: String,
        required: [true, 'la ubicacion es obligatorio']
    },
    fecha: {
        type: Date,
        required: [true, 'fecha es obligatoria']
    },
    recibido_por: {
        type: String,
        default: null
    },
    fecha_recibido: {
        type: Date,
        default: null
    },
    status: {
        type: String,
        default: 'pendiente'
    },
    cancelado: {
        type: Boolean,
        default: false
    }
});
OrdencompraSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Ordencompra', OrdencompraSchema);
