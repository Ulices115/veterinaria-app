"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const factura_1 = __importDefault(require("../controllers/factura"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('id_factura', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validar_campos_1.default.validarCampos
], factura_1.default.crearfactura);
router.get('/', [], factura_1.default.obtenerfacturas);
router.get('/:id', [], factura_1.default.obtenerfactura);
module.exports = router;
