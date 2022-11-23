import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import auditoria from '../controllers/auditoria'
import validarcampos  from '../middlewares/validar-campos';
const router = Router();
router.post('/', [
    // validarJWT,
    check('usuario','El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validarcampos.validarCampos
], auditoria.auditorias)
router.get('/',[

],auditoria.obtenerauditorias)


module.exports = router;