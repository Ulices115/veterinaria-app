import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------
import validaciones from '../helpers/db-validators'
import devoluciones from '../controllers/devoluciones'
import validarcampos  from '../middlewares/validar-campos';
const router = Router();
router.post('/', [
    // validarJWT,
    // check('id_devolucion','El nombre es obligatorio').not().isEmpty(),
    check('descripcion').custom(validaciones.esproductodevuelto),
    validarcampos.validarCampos,
], devoluciones.creardevolucion)
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], devoluciones.obtenerdevolucion)
router.get('/',[

],devoluciones.obtenerdevoluciones)


module.exports = router;