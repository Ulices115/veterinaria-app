import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import configuracion  from '../controllers/configuracion';
const router = Router();

router.post('/', [
    // validarJWT,
    check('rfc','el rfc es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
],configuracion.crearconfiguracion)
router.get('/',[

],configuracion.obtenerconfiguraciones)

router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], configuracion.obtenerconfiguracion )


router.put('/:id', [
    // validarjwt.validarJWT,
    // check( 'id_pedido', 'El nombre es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], configuracion.actualizarconfiguracion)

module.exports = router;