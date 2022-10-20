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
const producto_1 = __importDefault(require("../controllers/producto"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_producto', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion').custom(db_validators_1.default.existeproducto),
    validar_campos_1.default.validarCampos
], producto_1.default.crearproducto);
router.get('/', [], producto_1.default.obtenerproductos);
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], producto_1.default.obtenerproducto);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_producto', 'El id producto es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], producto_1.default.actualizarproducto);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], producto_1.default.borrarproducto);
module.exports = router;
