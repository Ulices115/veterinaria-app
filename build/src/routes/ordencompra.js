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
const ordencompra_1 = __importDefault(require("../controllers/ordencompra"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_orden', 'El nombre es obligatorio').not().isEmpty(),
    check('id_orden').custom(db_validators_1.default.existepedido),
    validar_campos_1.default.validarCampos
], ordencompra_1.default.crearorden);
router.get('/', [], ordencompra_1.default.obtenerordenes);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(), 
    validar_campos_1.default.validarCampos
], ordencompra_1.default.obtenerorden);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    // check('id').custom(),
    validar_campos_1.default.validarCampos
], ordencompra_1.default.borrarorden);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_orden', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], ordencompra_1.default.actualizarorden);
module.exports = router;
