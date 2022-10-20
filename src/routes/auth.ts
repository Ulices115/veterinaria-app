// const { Router } = require('express');
import { Router } from "express";
const { check } = require('express-validator'); 

// const { validarJWT } = require('../middlewares/validar-jwt')
// const { login, revalidarToken } = require('../controllers/auth');
// const { validarCampos } = require('../middlewares/validar-campos');
import validarcampos  from '../middlewares/validar-campos';
import validarjwt from '../middlewares/validar-jwt'
import auth from '../controllers/auth'

const router = Router();
router.post('/login',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarcampos.validarCampos
], auth.login);


router.get('/renew',[
    validarjwt.validarJWT,
    validarcampos.validarCampos
], auth.revalidarToken);


module.exports = router;