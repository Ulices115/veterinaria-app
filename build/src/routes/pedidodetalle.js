"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const pedidodetalle_1 = __importDefault(require("../controllers/pedidodetalle"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('descripcion', 'la descripcion es obligatorio').not().isEmpty(),
    //check('id').custom(existeb_pPorId),
    validar_campos_1.default.validarCampos
], pedidodetalle_1.default.crearpedidoD);
router.get('/', [], pedidodetalle_1.default.obtenerpedidosD);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], pedidodetalle_1.default.obtenerpedidoD);
router.delete('/:id', [
    // validarJWT,
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validar_campos_1.default.validarCampos
], pedidodetalle_1.default.borrarpedidoD);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], pedidodetalle_1.default.actualizarpedidoD);
module.exports = router;
