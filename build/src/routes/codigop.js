"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const codigop_1 = __importDefault(require("../controllers/codigop"));
const router = (0, express_1.Router)();
router.get('/:id', [], codigop_1.default.obtenercodigop);
module.exports = router;
