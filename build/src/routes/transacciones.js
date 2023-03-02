"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const transaccion_1 = __importDefault(require("../controllers/transaccion"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('transaccion', 'La transaccion es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], transaccion_1.default.creartransaccion);
router.get('/', [], transaccion_1.default.obtenertransacciones);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], transaccion_1.default.obtenertransaccion);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validar_campos_1.default.validarCampos
], transaccion_1.default.borrartransaccion);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], transaccion_1.default.actualizartransaccion);
module.exports = router;
