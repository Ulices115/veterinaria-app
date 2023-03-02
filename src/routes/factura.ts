import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import factura from '../controllers/factura'
import validarcampos  from '../middlewares/validar-campos';
const router = Router();
router.post('/', [
    // validarJWT,
    check('id_factura','El nombre es obligatorio').not().isEmpty(),
    //check('id').custom(),
    validarcampos.validarCampos
], factura.crearfactura)
router.get('/',[

],factura.obtenerfacturas)
router.get('/:id',[

],factura.obtenerfactura)


module.exports = router;