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
const OrdencompradetalleSchema = new mongoose_1.Schema({
    id_orden: {
        type: String,
        required: [true, 'El id es obligatorio']
    },
    producto: {
        type: String,
        required: [true, 'El servicio es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'La cantidad es obligatorio']
    },
    costo: {
        type: Number,
        required: [true, 'El costo es obligatorio']
    },
    importe: {
        type: Number,
        required: [true, 'El importe es obligatorio']
    },
    activo: {
        type: Boolean,
        default: true
    }
});
OrdencompradetalleSchema.methods.toJSON = function () {
    // si se declara aqui el activo, no se tomara en cuenta en las peticiones
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Ordencompradetalle', OrdencompradetalleSchema);
