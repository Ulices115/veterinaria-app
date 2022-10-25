import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import movimientos from '../controllers/movimiento_inv'
import validarcampos  from '../middlewares/validar-campos';
const router = Router();
router.post('/', [
    // validarJWT,
    // check('','El  es obligatorio').not().isEmpty(),
    //check('id').custom(existeb_pPorId),
    validarcampos.validarCampos
], movimientos.movimiento)
router.get('/',[

],movimientos.movimiento)


module.exports = router;