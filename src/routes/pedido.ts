// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import pedido from '../controllers/pedido'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_pedido','El id_pedido es obligatorio').not().isEmpty(),
    check('id_pedido').custom(validaciones.existepedido),
    validarcampos.validarCampos
], pedido.crearpedido)

router.get('/',[

], pedido.obtenerpedidos)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], pedido.obtenerpedido )

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], pedido.borrarpedido)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_pedido', 'El id_pedido es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], pedido.actualizarpedido)

module.exports = router;