// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import transaccion from '../controllers/transaccion'
const router = Router();

router.post('/', [
    // validarJWT,
    check('transaccion','La transaccion es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], transaccion.creartransaccion)

router.get('/',[

], transaccion.obtenertransacciones)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], transaccion.obtenertransaccion )

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], transaccion.borrartransaccion)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], transaccion.actualizartransaccion)

module.exports = router;