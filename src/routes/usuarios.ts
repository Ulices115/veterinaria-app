// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

// const { 
//     validarCampos, validarJWT, esAdminRol, tienRol
// } = require('../middlewares');
import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import usuarios from '../controllers/usuarios'

const router = Router();

router.get('/',usuarios.usuariosGet);

router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(validaciones.existeUsuarioPorId),
    validarcampos.validarCampos
], usuarios.usuarioget)

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    // check('ubicacion').custom(validaciones. existeubicacionu),
    check('id').custom(validaciones.existeUsuarioPorId),
    // check('rol').custom( validaciones.esRoleValido ),
    validarcampos.validarCampos
], usuarios.usuariosPut);

router.post('/', [
    check('nombre', 'Nombre obligatorio').not().isEmpty(),
    check('password', 'Password debe de ser de mas de 6 letras').isLength({min:6}),
    check('correo', 'Correo incorrecto').isEmail(),
    check('correo').custom( validaciones.existeEmail ),
    // check('rol', 'no es un roll  permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    // check('rol').custom( validaciones.esRoleValido ),    
    validarcampos.validarCampos
], usuarios.usuariosPost);

router.delete('/:id', [
    // validarjwt.validarJWT,
    // esAdminRol,
    // roles.tienRol('ADMIN_ROLE','VENTAS_ROL'),
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom(validaciones.existeUsuarioPorId),
    validarcampos.validarCampos
], usuarios.usuariosDelete);

router.delete('/',usuarios.usuariosPatch);

module.exports = router;