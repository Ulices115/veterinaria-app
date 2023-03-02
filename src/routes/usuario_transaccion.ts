// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import transaccion from '../controllers/usuario_transaccion'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_usuario','el id_usuario es obligatorio').not().isEmpty(),
    check('transaccion','la transaccion es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], transaccion.crearUtransaccion)

router.get('/',[

], transaccion.obtenerUtransacciones)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], transaccion.obtenerUtransaccion )

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], transaccion.borrarUtransaccion)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'transaccion', 'la transaccion es obligatorio es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], transaccion.actualizarUtransaccion)

module.exports = router;