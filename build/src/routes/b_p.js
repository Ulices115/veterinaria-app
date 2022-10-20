"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const db_validators_1 = __importDefault(require("../helpers/db-validators"));
const b_p_1 = __importDefault(require("../controllers/b_p"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarjwt.validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(validaciones.existeb_pPorId),
    check('rfc', 'RFC invalido').matches(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/),
    validar_campos_1.default.validarCampos
], b_p_1.default.crearb_p);
router.get('/', [], b_p_1.default.obtenerb_ps);
router.get('/:id', [
// check('id','No es un id de mongo valido').isMongoId(),
// check('id').custom(validaciones.existeb_pPorId), 
// validarcampos.validarCampos
], b_p_1.default.obtenerb_p);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], b_p_1.default.actualizarb_p);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom(db_validators_1.default.existeb_pPorId),
    check('id').custom(db_validators_1.default.existepedidob_p),
    validar_campos_1.default.validarCampos
], b_p_1.default.borrarb_p);
module.exports = router;
