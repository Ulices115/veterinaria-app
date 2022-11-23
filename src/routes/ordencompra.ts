// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import orden from '../controllers/ordencompra'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_orden','El nombre es obligatorio').not().isEmpty(),
    check('id_orden').custom(validaciones.existepedido),
    validarcampos.validarCampos
], orden.crearorden)

router.get('/',[

], orden.obtenerordenes)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(), 
    validarcampos.validarCampos
], orden.obtenerorden)

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(),
    validarcampos.validarCampos
], orden.borrarorden)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_orden', 'El nombre es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], orden.actualizarorden)

module.exports = router;