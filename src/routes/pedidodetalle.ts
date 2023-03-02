// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

// const { validarCampos,validarJWT } = require('../middlewares');
// //const { validarCampos } = require('../middlewares');
// const { 
//     crearpedidoD,obtenerpedidosD,obtenerpedidoD,borrarpedidoD,obtenerdetalle
  
// } = require('../controllers/pedidodetalle');
// const { existepedidoPorId } = require('../helpers/db-validators');
import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import pedidoDetalle from '../controllers/pedidodetalle'
const router = Router();

router.post('/', [
    // validarJWT,
     check('descripcion','la descripcion es obligatorio').not().isEmpty(),
    //check('id').custom(existeb_pPorId),
    validarcampos.validarCampos
], pedidoDetalle.crearpedidoD)

router.get('/',[

], pedidoDetalle.obtenerpedidosD)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], pedidoDetalle.obtenerpedidoD )

router.delete('/:id', [
    // validarJWT,
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], pedidoDetalle.borrarpedidoD)

router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
],pedidoDetalle.actualizarpedidoD)

module.exports = router;