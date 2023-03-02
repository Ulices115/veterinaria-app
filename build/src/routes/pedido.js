"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const db_validators_1 = __importDefault(require("../helpers/db-validators"));
const pedido_1 = __importDefault(require("../controllers/pedido"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_pedido', 'El id_pedido es obligatorio').not().isEmpty(),
    check('id_pedido').custom(db_validators_1.default.existepedido),
    validar_campos_1.default.validarCampos
], pedido_1.default.crearpedido);
router.get('/', [], pedido_1.default.obtenerpedidos);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], pedido_1.default.obtenerpedido);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validar_campos_1.default.validarCampos
], pedido_1.default.borrarpedido);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_pedido', 'El id_pedido es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], pedido_1.default.actualizarpedido);
module.exports = router;
