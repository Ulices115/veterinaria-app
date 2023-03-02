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
const Producto_servicioSchema = new mongoose_1.Schema({
    id_prod_serv: {
        type: String,
        required: [true, 'id obligatorio'],
        unique: true,
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
    },
    codigo_barra: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
    },
    tipo: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
    },
    clave_unidad: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
    },
    unidad: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
    },
    clave_prod_serv: {
        type: String,
        // required: [true, 'codigo barra obligatorio'],
    },
    objeto_imp: {
        type: String,
    },
    impuesto: {
        type: String,
    },
    tipo_factor: {
        type: String,
    },
    tasa_cuota: {
        type: String,
    },
    activo: {
        type: Boolean,
        default: true
    }
});
Producto_servicioSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Productos_servicios', Producto_servicioSchema);
