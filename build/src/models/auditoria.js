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
const AuditoriaSchema = new mongoose_1.Schema({
    id_inventario: {
        type: String,
        required: [true, 'id_inventario obligatorio'],
    },
    usuario: {
        type: String,
        required: [true, 'usuario obligatorio'],
    },
    fecha: {
        type: Date,
        required: [true, 'fecha obligatorio'],
    },
    razon: {
        type: String,
        required: [true, 'razon obligatorio'],
    },
    tipo_ajuste: {
        type: String,
        required: [true, 'tipo de ajuste obligatorio'],
    },
    valor_anterior: {
        type: Number,
        required: [true, 'valor anterior obligatorio'],
    },
    nuevo_valor: {
        type: Number,
        required: [true, 'nuevo valor obligatorio'],
    },
});
AuditoriaSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Auditoria', AuditoriaSchema);
