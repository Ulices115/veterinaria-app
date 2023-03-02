// const { Router } = require('express');
import { Router } from "express";
const router = Router();

import cfdi from '../controllers/cfdi'
router.get('/:id',[

], cfdi.cfdi)


module.exports = router;