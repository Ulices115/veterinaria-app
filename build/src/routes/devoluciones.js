"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const db_validators_1 = __importDefault(require("../helpers/db-validators"));
const devoluciones_1 = __importDefault(require("../controllers/devoluciones"));
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const router = (0, express_1.Router)();
router.post('/', [
    // validarJWT,
    // check('id_devolucion','El nombre es obligatorio').not().isEmpty(),
    check('descripcion').custom(db_validators_1.default.esproductodevuelto),
    validar_campos_1.default.validarCampos,
], devoluciones_1.default.creardevolucion);
router.get('/:id', [
    //  check('id','No es un id de mongo valido').isMongoId(),
    validar_campos_1.default.validarCampos
], devoluciones_1.default.obtenerdevolucion);
router.get('/', [], devoluciones_1.default.obtenerdevoluciones);
module.exports = router;
