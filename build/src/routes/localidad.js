"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const localidad_1 = __importDefault(require("../controllers/localidad"));
const router = (0, express_1.Router)();
router.get('/', [], localidad_1.default.obtenermlocalidad);
module.exports = router;
