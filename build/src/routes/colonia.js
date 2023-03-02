"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const colonia_1 = __importDefault(require("../controllers/colonia"));
const router = (0, express_1.Router)();
router.get('/:id', [], colonia_1.default.obtenercolonia);
module.exports = router;
