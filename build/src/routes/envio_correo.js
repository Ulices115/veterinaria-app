"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const envio_correo_1 = __importDefault(require("../controllers/envio_correo"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    validar_campos_1.default.validarCampos
], envio_correo_1.default.crearcorreo);
module.exports = router;
