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
const EstadoSchema = new mongoose_1.Schema({
    estado: {
        type: String,
        require: [true, 'El idestado del estado es obligatorio'],
        unique: true
    },
    estado_fiscal: {
        type: String,
        require: [true, 'El nombrefiscal del estado es obligatorio'],
        unique: true
    },
    denom: {
        type: String,
        require: [true, 'El nombre del estado es obligatorio'],
        unique: true
    }
    // activo: {
    //     type: Boolean,
    //     default:true
    // },
});
EstadoSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Estado', EstadoSchema);
