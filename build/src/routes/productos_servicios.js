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
const productos_servicios_1 = __importDefault(require("../controllers/productos_servicios"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_prod_serv', 'El id_prod_serv es obligatorio').not().isEmpty(),
    check('descripcion').custom(db_validators_1.default.existeprod_serv),
    validar_campos_1.default.validarCampos
], productos_servicios_1.default.crearprod_serv);
router.get('/', [], productos_servicios_1.default.obtenerprod_servs);
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], productos_servicios_1.default.obtenerprod_serv);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_prod_serv', 'El id prod_serv es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], productos_servicios_1.default.actualizarprod_serv);
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], productos_servicios_1.default.borrarprod_serv);
module.exports = router;
