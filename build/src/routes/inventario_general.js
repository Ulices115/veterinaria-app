"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const inventario_general_1 = __importDefault(require("../controllers/inventario_general"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const db_validators_1 = __importDefault(require("../helpers/db-validators"));
const router = (0, express_1.Router)();
router.post('/', [
    check('ubicacion', 'El id producto es obligatorio').not().isEmpty(),
    check('ubicacion').custom(db_validators_1.default.existeinventarioubi),
    check('tipo').custom(db_validators_1.default.existetipo),
    check('id_prod_serv').custom(db_validators_1.default.existeinventarioprod_serv),
    validar_campos_1.default.validarCampos,
], inventario_general_1.default.crearinventario);
router.get('/', [], inventario_general_1.default.obtenerinventarios);
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], inventario_general_1.default.obtenerinventario);
router.put('/:id', [
    // validarjwt.validarJWT,
    check('id_prod_serv', 'El id_prod_serv es obligatorio').not().isEmpty(),
    validar_campos_1.default.validarCampos
], inventario_general_1.default.actualizarinventario);
router.delete('/:id', [
    //validarjwt.validarJWT,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom(db_validators_1.default.existeinventario),
    validar_campos_1.default.validarCampos
], inventario_general_1.default.borrarinventario);
module.exports = router;
