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
const B_pSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        // unique: false
    },
    rfc: {
        type: String,
        required: [true, 'el rfc es obligatorio']
    },
    id_b_p: {
        type: String,
        required: [true, 'el numero de cliente es obligatorio'],
        unique: true,
    },
    calle: {
        type: String,
        required: [true, 'la calle es obligatorio']
    },
    numero_ext: {
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    numero_int: {
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    colonia: {
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    id_municipio: {
        type: String,
        // required: [true, 'El municipio es obligatorio']
    },
    id_poblacion: {
        type: String,
        // required: [true, 'La poblacion es obligatorio']
    },
    id_estado: {
        type: String,
        required: [true, 'El estado es obligatorio']
    },
    id_pais: {
        type: String,
        required: [true, 'El pais es obligatorio']
    },
    codigoP: {
        type: Number,
        required: [true, 'El codigo postal es obligatorio']
    },
    regimen_fiscal: {
        type: String,
        required: [true, 'El regimen fiscal es obligatorio']
    },
    clave_usof: {
        type: String,
        required: [true, 'El clave de uso fiscal es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'correo es obligatorio']
    },
    numero_cel: {
        type: Number,
        required: [true, 'numero es obligatorio']
    },
    metodo_pago: {
        type: String,
        required: [true, 'metodo pago es obligatorio']
    },
    condicion_pago: {
        type: String,
        required: [true, 'condicion pago es obligatorio']
    },
    forma_pago: {
        type: String,
        required: [true, 'forma pago es obligatorio']
    },
    activo: {
        type: Boolean,
        default: true
    }
});
B_pSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('b_p', B_pSchema);
