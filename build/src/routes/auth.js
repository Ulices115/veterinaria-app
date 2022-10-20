"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const { check } = require('express-validator');
// const { validarJWT } = require('../middlewares/validar-jwt')
// const { login, revalidarToken } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validar_jwt_1 = __importDefault(require("../middlewares/validar-jwt"));
const auth_1 = __importDefault(require("../controllers/auth"));
const router = (0, express_1.Router)();
router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], auth_1.default.login);
router.get('/renew', [
    validar_jwt_1.default.validarJWT,
    validar_campos_1.default.validarCampos
], auth_1.default.revalidarToken);
module.exports = router;
