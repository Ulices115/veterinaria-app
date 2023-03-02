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
const usuarios_1 = __importDefault(require("../controllers/usuarios"));
const router = (0, express_1.Router)();
router.get('/', usuarios_1.default.usuariosGet);
router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(validaciones.existeUsuarioPorId),
    validar_campos_1.default.validarCampos
], usuarios_1.default.usuarioget);
router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    // check('ubicacion').custom(validaciones. existeubicacionu),
    check('id').custom(db_validators_1.default.existeUsuarioPorId),
    // check('rol').custom( validaciones.esRoleValido ),
    validar_campos_1.default.validarCampos
], usuarios_1.default.usuariosPut);
router.post('/', [
    check('nombre', 'Nombre obligatorio').not().isEmpty(),
    check('password', 'Password debe de ser de mas de 6 letras').isLength({ min: 6 }),
    check('correo', 'Correo incorrecto').isEmail(),
    check('correo').custom(db_validators_1.default.existeEmail),
    // check('rol', 'no es un roll  permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    // check('rol').custom( validaciones.esRoleValido ),    
    validar_campos_1.default.validarCampos
], usuarios_1.default.usuariosPost);
router.delete('/:id', [
    // validarjwt.validarJWT,
    // esAdminRol,
    // roles.tienRol('ADMIN_ROLE','VENTAS_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(db_validators_1.default.existeUsuarioPorId),
    validar_campos_1.default.validarCampos
], usuarios_1.default.usuariosDelete);
router.delete('/', usuarios_1.default.usuariosPatch);
module.exports = router;
