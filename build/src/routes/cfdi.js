"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const { Router } = require('express');
const express_1 = require("express");
const router = (0, express_1.Router)();
const cfdi_1 = __importDefault(require("../controllers/cfdi"));
router.get('/:id', [], cfdi_1.default.cfdi);
module.exports = router;
