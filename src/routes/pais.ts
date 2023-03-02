import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import pais from '../controllers/pais'

const router = Router();

router.get('/',[

],pais.obtenerpaises )


module.exports = router;