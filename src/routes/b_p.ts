// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import B_P from '../controllers/b_p'

const router = Router();

router.post('/', [
    // validarjwt.validarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(validaciones.existeb_pPorId),
    check('rfc','RFC invalido').matches(/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/),    
    validarcampos.validarCampos
], B_P.crearb_p)

router.get('/',[

], B_P.obtenerb_ps)



router.get('/:id', [
     // check('id','No es un id de mongo valido').isMongoId(),
     // check('id').custom(validaciones.existeb_pPorId), 
    // validarcampos.validarCampos
], B_P.obtenerb_p )

router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], B_P.actualizarb_p )

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    check('id').custom(validaciones.existeb_pPorId),
    check('id').custom(validaciones.existepedidob_p),
    validarcampos.validarCampos
], B_P.borrarb_p)


module.exports = router;