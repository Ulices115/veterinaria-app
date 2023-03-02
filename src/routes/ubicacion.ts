// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import ubicacion from '../controllers/ubicacion'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_ubicacion','El nombre es obligatorio').not().isEmpty(),
    check('descripcion').custom(validaciones.existeubicacion ),
    validarcampos.validarCampos
], ubicacion.crearubicacion)
router.get('/',[

],ubicacion.obtenerubicaciones)
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], ubicacion.obtenerubicacion)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_ubicacion', 'El id producto es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], ubicacion.actualizarubicacion)
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], ubicacion.borrarubicacion)



module.exports = router;