// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 
import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import ordenDetalle from '../controllers/ordencompradetalle'
const router = Router();

router.post('/', [
    // validarJWT,
    check('producto','El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(existeb_pPorId),
    validarcampos.validarCampos
], ordenDetalle.crearordenD)

router.get('/',[

], ordenDetalle.obtenerordenesD)



router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], ordenDetalle.obtenerordenD )

router.delete('/:id', [
    // validarJWT,
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], ordenDetalle.borrarordenD)
// router.get('/:id', [
//     check('id','No es un id de mongo valido').isMongoId(),
//     // check('id').custom(existeb_pPorId), 
//     validarCampos
// ], obtenerdetalle )

module.exports = router;