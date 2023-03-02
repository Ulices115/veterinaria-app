"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const ventas_1 = __importDefault(require("../controllers/ventas"));
const router = (0, express_1.Router)();
router.get('/:id', [], ventas_1.default.obtenerpedidos);
module.exports = router;
