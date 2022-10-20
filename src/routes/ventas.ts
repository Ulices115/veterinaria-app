import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import ventas from '../controllers/ventas'

const router = Router();

router.get('/:id',[

],ventas.obtenerpedidos)


module.exports = router;