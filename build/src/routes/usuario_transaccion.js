"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const usuario_transaccion_1 = __importDefault(require("../controllers/usuario_transaccion"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_usuario', 'el id_usuario es obligatorio').not().isEmpty(),
    check('transaccion', 'la transaccion es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], usuario_transaccion_1.default.crearUtransaccion);
router.get('/', [], usuario_transaccion_1.default.obtenerUtransacciones);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], usuario_transaccion_1.default.obtenerUtransaccion);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validar_campos_1.default.validarCampos
], usuario_transaccion_1.default.borrarUtransaccion);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('transaccion', 'la transaccion es obligatorio es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], usuario_transaccion_1.default.actualizarUtransaccion);
module.exports = router;
