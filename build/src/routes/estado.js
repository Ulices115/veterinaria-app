"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { check } = require('express-validator');
// ---------------------------------------
const estado_1 = __importDefault(require("../controllers/estado"));
const router = (0, express_1.Router)();
router.get('/:id', [], estado_1.default.obtenerestado);
router.get('/', [], estado_1.default.obtenerestados);
module.exports = router;
