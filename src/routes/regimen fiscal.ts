import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import regimen from '../controllers/regimen fiscal'

const router = Router();

router.get('/',[

],regimen.obtenerregimen)


module.exports = router;