"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const movimiento_inv_1 = __importDefault(require("../controllers/movimiento_inv"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    // check('','El  es obligatorio').not().isEmpty(),
    //check('id').custom(existeb_pPorId),
    validar_campos_1.default.validarCampos
], movimiento_inv_1.default.movimiento);
router.get('/', [], movimiento_inv_1.default.movimiento);
module.exports = router;
