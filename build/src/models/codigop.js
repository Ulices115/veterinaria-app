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
const CodigopSchema = new mongoose_1.Schema({
    c_codigoPostal: {
        type: Number,
        required: [true, 'es requerido']
    },
    c_Estado: {
        type: String,
        required: [true, 'es obligatorio']
    },
    c_Municipio: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    c_Localidad: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    Estímulo_Franja_Fronteriza: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    Fecha_inicio_vigencia: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Fecha_fin_vigencia: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Descripción_del_uso_Horario: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Mes_Inicio_Horario_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Dia_Inicio_Horario_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Diferencia_Horaria_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Mes_Inicio_Horario_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Día_Inicio_Horario_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Diferencia_Horaria_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
});
CodigopSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Codigop', CodigopSchema);
