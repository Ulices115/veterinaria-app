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
const configuracionSchema = new mongoose_1.Schema({
    rfc: {
        type: String,
        require: [true, 'El rfc  es obligatorio'],
    },
    regimen_f: {
        type: String,
        require: [true, 'El regimen fiscal es obligatorio'],
    },
    razon_social: {
        type: String,
        require: [true, 'La razon social es obligatorio'],
    },
    lugar_exp: {
        type: String,
        require: [true, 'el lugar de expedicion es obligatorio'],
    },
    correo: {
        type: String,
        require: [true, 'el correo es obligatorio'],
    },
    password: {
        type: String,
        require: [true, 'el password es obligatorio'],
    },
    exportacion: {
        type: String,
        require: [true, 'exportacion es obligatorio'],
    },
    moneda: {
        type: String,
        require: [true, 'la moneda es obligatorio'],
    },
    serie: {
        type: String,
        require: [true, 'la serie es obligatorio'],
    },
    tipo_comprobante: {
        type: String,
        require: [true, 'el tipo de comprobante es obligatorio'],
    },
    certificado: {
        type: String,
        require: [true, 'el certificado es obligatorio'],
    },
    key: {
        type: String,
        require: [true, 'el key es obligatorio'],
    },
    // activo: {
    //     type: Boolean,
    //     default:true
    // },
});
configuracionSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Configuracion', configuracionSchema);
