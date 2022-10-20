import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import colonia from '../controllers/colonia'

const router = Router();

router.get('/:id',[

],colonia.obtenercolonia)


module.exports = router;