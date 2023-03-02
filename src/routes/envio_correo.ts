import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import correo from '../controllers/envio_correo'
import validarcampos  from '../middlewares/validar-campos';
const router = Router();
router.post('/', [

    validarcampos.validarCampos
], correo.crearcorreo)

module.exports = router;