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
const MunicipioSchema = new mongoose_1.Schema({
    c_municipio: {
        type: Number,
        required: [true, 'c_localidad obligatorio'],
    },
    c_estado: {
        type: String,
        required: [true, 'c_estado obligatorio'],
    },
    descripcion: {
        type: String,
        required: [true, 'descripcion obligatorio'],
    },
    fecha_inicio_vigencia: {
        type: String,
        required: [true, 'fecha obligatorio'],
    },
    fecha_fin_vigencia: {
        type: String,
    }
});
MunicipioSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Municipio', MunicipioSchema);
