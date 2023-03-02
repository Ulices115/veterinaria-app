"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const auditoria_1 = __importDefault(require("../controllers/auditoria"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('usuario', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validar_campos_1.default.validarCampos
], auditoria_1.default.auditorias);
router.get('/', [], auditoria_1.default.obtenerauditorias);
module.exports = router;
