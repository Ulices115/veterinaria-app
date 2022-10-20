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
const inventario_servicio_1 = __importDefault(require("../controllers/inventario_servicio"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarjwt.validarJWT,
    check('ubicacion', 'El id del servicio es obligatorio').not().isEmpty(),
    check('ubicacion').custom(db_validators_1.default.existeservicioubi),
    check('id_servicio').custom(db_validators_1.default.existeinventarioservicio),
    validar_campos_1.default.validarCampos
], inventario_servicio_1.default.crearservicio);
router.get('/', [], inventario_servicio_1.default.obtenerservicios);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_inventario', 'El inventario es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], inventario_servicio_1.default.actualizarservicio);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], inventario_servicio_1.default.obtenerservicio);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validar_campos_1.default.validarCampos
], inventario_servicio_1.default.borrarservicio);
module.exports = router;
