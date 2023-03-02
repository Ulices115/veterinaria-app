"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarcampos = void 0;
const { validationResult } = require('express-validator');
class validarcampos {
    constructor() {
        this.validarCampos = (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors });
            }
            next();
        };
    }
}
exports.validarcampos = validarcampos;
exports.default = new validarcampos();
