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
const InventarioSchema = new mongoose_1.Schema({
    id_inventario: {
        type: String,
        required: [true, 'id inventario obligatorio'],
        unique: true
    },
    id_prod_serv: {
        type: String,
        required: [true, 'id_prod_serv obligatorio'],
        // ref:'Producto',
    },
    precio: {
        type: Number,
        required: [true, 'precio obligatorio'],
    },
    costo: {
        type: Number,
        required: [true, 'costo obligatorio'],
    },
    cantidad: {
        type: Number,
        // required: [true, 'cantidad obligatorio'],
    },
    ubicacion: {
        type: String,
        required: [true, 'ubicación obligatorio'],
    },
    tipo: {
        type: String,
        required: [true, 'tipo obligatorio'],
    },
    activo: {
        type: Boolean,
        default: true
    }
});
InventarioSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Inventario_general', InventarioSchema);
