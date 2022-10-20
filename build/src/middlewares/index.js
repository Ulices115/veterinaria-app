"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validar_campos_1 = require("./validar-campos");
const validar_jwt_1 = require("./validar-jwt");
const validar_roles_1 = __importDefault(require("./validar-roles"));
module.exports = Object.assign(Object.assign(Object.assign({}, validar_campos_1.validarcampos), validar_jwt_1.validarjwt), validar_roles_1.default);
