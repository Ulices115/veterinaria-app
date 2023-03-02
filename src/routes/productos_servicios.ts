// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import producto_servicio from '../controllers/productos_servicios'
const router = Router();

router.post('/', [
    // validarJWT,
    check('id_prod_serv','El id_prod_serv es obligatorio').not().isEmpty(),
    check('descripcion').custom(validaciones.existeprod_serv),
    validarcampos.validarCampos
], producto_servicio.crearprod_serv)
router.get('/',[

],producto_servicio.obtenerprod_servs)
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], producto_servicio.obtenerprod_serv)
router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_prod_serv', 'El id prod_serv es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], producto_servicio.actualizarprod_serv)
router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], producto_servicio.borrarprod_serv)



module.exports = router;