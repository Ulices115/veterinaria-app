"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const regimen_fiscal_1 = __importDefault(require("../controllers/regimen fiscal"));
const router = (0, express_1.Router)();
router.get('/', [], regimen_fiscal_1.default.obtenerregimen);
module.exports = router;
