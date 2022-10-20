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
const RegimenSchema = new mongoose_1.Schema({
    id_r: {
        type: String,
        require: [true, 'El id_r  es obligatorio'],
        unique: true
    },
    descripcion: {
        type: String,
        require: [true, 'la descripcion es obligatorio'],
    },
    fisica: {
        type: String,
        require: [true, 'fisica es obligatorio'],
    },
    moral: {
        type: String,
        require: [true, 'moral es obligatorio'],
    },
    fecha_ini_vigencia: {
        type: String,
        require: [true, 'fecha de inicio es obligatorio'],
    },
    fecha_fin_vigencia: {
        type: String,
        require: [true, 'fecha de fin es obligatorio'],
    }
});
RegimenSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, data = __rest(_a, ["__v"]);
    return data;
};
module.exports = (0, mongoose_1.model)('Regimen Fiscal', RegimenSchema);
