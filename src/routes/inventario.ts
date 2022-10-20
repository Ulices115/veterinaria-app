import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------
import inventario from '../controllers/inventario'
import validarcampos  from '../middlewares/validar-campos';
import validaciones from '../helpers/db-validators'
import validarjwt from '../middlewares/validar-jwt'
const router = Router();

router.post('/',[
    check('ubicacion','El id producto es obligatorio').not().isEmpty(),
    check('ubicacion').custom(validaciones. existeinventarioubi),
    check('id_producto').custom(validaciones.existeinventarioprod),
    // check('inventarios').custom(validaciones.existeinventarioprod),
    validarcampos.validarCampos,
],inventario.crearinventario)

router.get('/',[

],inventario.obtenerinventarios)
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validarcampos.validarCampos
], inventario.obtenerinventario)

router.put('/:id', [
    // validarjwt.validarJWT,
    check( 'id_producto', 'El id producto es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], inventario.actualizarinventario)

router.delete('/:id', [
    //validarjwt.validarJWT,
    check('id','No es un id de mongo valido').isMongoId(),
    check('id').custom(validaciones.existeinventario),
    validarcampos.validarCampos
], inventario.borrarinventario)


module.exports = router;