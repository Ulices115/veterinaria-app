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
const mongoose_1 = require("mongoose");
const MovimientoSchema = new mongoose_1.Schema({
    referencia: {
        type: String,
        required: [true, 'referencia obligatorio'],
    },
    ubicacion: {
        type: String,
        required: [true, 'ubicacion oligatorio'],
    },
    fecha: {
        type: Date,
        required: [true, 'fecha obligatorio'],
    },
    tipo: {
        type: String,
        required: [true, 'tipo obligatorio'],
    },
    tipo_ajuste: {
        type: String,
        required: [true, 'tipo de ajuste obligatorio'],
    },
    cantidad_inicial: {
        type: Number,
        required: [true, 'cantidad inicial obligatorio'],
    },
    cantidad_final: {
        type: Number,
        required: [true, 'cantidad final obligatorio'],
    },
});
MovimientoSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Movimientos', MovimientoSchema);
