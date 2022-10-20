"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarjwt = void 0;
const jwt = require('jsonwebtoken');
const Usuario1 = require('../models/usuario');
class validarjwt {
    constructor() {
        this.validarJWT = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const token = req.header('x-token');
            if (!token) {
                return res.status(401).json({
                    msg: 'No hay token en la peticion'
                });
            }
            try {
                const { uid } = jwt.verify(token, process.env.JWT_KEY);
                // req.uid = uid;
                const usuario = yield Usuario1.findById(uid);
                if (!usuario) {
                    return res.status(401).json({
                        msg: 'token no valido -no existe'
                    });
                }
                if (!usuario.estado) {
                    return res.status(401).json({
                        msg: 'token no valido -usuario baja'
                    });
                }
                req.usuario = usuario;
                // console.log(req.usuario);
                next();
            }
            catch (error) {
                res.status(401).json({
                    msg: 'Token no valido'
                });
                console.log(error);
            }
        });
    }
}
exports.validarjwt = validarjwt;
exports.default = new validarjwt();
