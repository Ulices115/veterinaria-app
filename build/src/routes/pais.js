"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const pais_1 = __importDefault(require("../controllers/pais"));
const router = (0, express_1.Router)();
router.get('/', [], pais_1.default.obtenerpaises);
module.exports = router;
