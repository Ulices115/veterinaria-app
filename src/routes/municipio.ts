import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import municipio from '../controllers/municipio'

const router = Router();

router.get('/:id',[

],municipio.obtenermunicipio)


module.exports = router;