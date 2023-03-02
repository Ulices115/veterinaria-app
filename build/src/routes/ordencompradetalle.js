"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const ordencompradetalle_1 = __importDefault(require("../controllers/ordencompradetalle"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    check('producto', 'El nombre es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], ordencompradetalle_1.default.crearordenD);
router.get('/', [], ordencompradetalle_1.default.obtenerordenesD);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], ordencompradetalle_1.default.obtenerordenD);
router.delete('/:id', [
    // validarJWT,
    // check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], ordencompradetalle_1.default.borrarordenD);
module.exports = router;
