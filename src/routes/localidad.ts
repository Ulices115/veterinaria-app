import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import localidad from '../controllers/localidad'

const router = Router();

router.get('/',[

],localidad.obtenermlocalidad)


module.exports = router;