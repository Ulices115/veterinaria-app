// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import producto from '../controllers/producto'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_producto','El nombre es obligatorio').not().isEmpty(),
    check('descripcion').custom(validaciones.existeproducto),
    validarcampos.validarCampos
], producto.crearproducto)
router.get('/',[

],producto.obtenerproductos)
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], producto.obtenerproducto)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_producto', 'El id producto es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], producto.actualizarproducto)
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], producto.borrarproducto)



module.exports = router;