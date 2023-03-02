"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const configuracion_1 = __importDefault(require("../controllers/configuracion"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('rfc', 'el rfc es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], configuracion_1.default.crearconfiguracion);
router.get('/', [], configuracion_1.default.obtenerconfiguraciones);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validar_campos_1.default.validarCampos
], configuracion_1.default.obtenerconfiguracion);
router.put('/:id', [
    // validarjwt.validarJWT,
    // check( 'id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], configuracion_1.default.actualizarconfiguracion);
module.exports = router;
