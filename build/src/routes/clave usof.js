"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const clave_usof_1 = __importDefault(require("../controllers/clave usof"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.get('/', [], clave_usof_1.default.obtenerclave);
router.post('/', [
    // validarJWT,
    check('id_cfdi', 'El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validar_campos_1.default.validarCampos
], clave_usof_1.default.crearclave);
module.exports = router;
