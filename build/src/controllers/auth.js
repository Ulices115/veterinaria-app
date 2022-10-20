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
exports.login = void 0;
const Usuario = require('../models/usuario');
const bcriptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
class login {
    constructor() {
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.body;
            // console.log(password);
            try {
                const usuario = yield Usuario.findOne({ correo });
                if (!usuario) {
                    return res.status(400).json({
                        msg: 'Usuario/Password no son correctos--correo'
                    });
                }
                // if( usuario.rol!=='ADMIN_ROLE'){
                //     throw new Error(`El rol no valido`).message
                // }
                if (!usuario.estado) {
                    return res.status(400).json({
                        msg: 'Usuario/Password no son correctos--estado:falso'
                    });
                }
                const validPassword = bcriptjs.compareSync(password, usuario.password);
                if (!validPassword) {
                    return res.status(400).json({
                        msg: 'Usuario/Password no son correctos--password'
                    });
                }
                const token = yield generarJWT(usuario.id);
                res.json({
                    usuario,
                    token,
                });
                console.log('Sesion iniciada por:', usuario.nombre);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg: 'Algo salio mal con el login'
                });
            }
        });
        this.revalidarToken = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const token = yield generarJWT(req.usuario.id);
            const usuario = req.usuario;
            return res.status(200).json({ usuario, token });
        });
    }
}
exports.login = login;
exports.default = new login();
