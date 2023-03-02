import { Router } from "express";
const { check } = require('express-validator'); 
// ---------------------------------------

import estado from '../controllers/estado'

const router = Router();

router.get('/:id',[

],estado.obtenerestado)

router.get('/',[

],estado.obtenerestados)


module.exports = router;