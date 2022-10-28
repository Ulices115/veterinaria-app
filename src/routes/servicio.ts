// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 


// const { existeb_pPorId } = require('../helpers/db-validators');
import roles from '../middlewares/validar-roles'
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import validaciones from '../helpers/db-validators'
import servicio from '../controllers/servicio'
const router = Router();

router.post('/', [
    // validarjwt.validarJWT,
    check('id_servicio','El nombre es obligatorio').not().isEmpty(),
    // check('descripcion').custom(validaciones.existeservicio),
    validarcampos.validarCampos
], servicio.crearservicio)

router.get('/',[

], servicio.obtenerservicios)

router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_servicio', 'El id servicio es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], servicio.actualizarservicio)

router.get('/:id', [
    // check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existeb_pPorId), 
    validarcampos.validarCampos
], servicio.obtenerservicio )

router.delete('/:id', [
    // validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    // check('id').custom(existepedidoPorId),
    validarcampos.validarCampos
], servicio.borrarservicio)

module.exports = router;