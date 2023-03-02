import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import codigop from '../controllers/codigop'

const router = Router();

router.get('/:id',[

],codigop.obtenercodigop)


module.exports = router;