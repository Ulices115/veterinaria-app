import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import clave from '../controllers/clave usof'
import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
const router = Router();

router.get('/',[
 
],clave.obtenerclave)

router.post('/', [
    // validarJWT,
    check('id_cfdi','El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validarcampos.validarCampos
], clave.crearclave)

module.exports = router;