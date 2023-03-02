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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarios = void 0;
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
class usuarios {
    constructor() {
        this.usuariosGet = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { limite = 5, desde = 0 } = req.query;
            const query = { estado: true };
            const [total, usuarios] = yield Promise.all([
                Usuario.countDocuments(query),
                Usuario.find(query)
                    .skip(Number(desde))
                    .limit(Number(limite))
            ]);
            res.json({
                total,
                usuarios
            });
        }); //agregado
        this.usuarioget = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var { tipo } = req.query;
            console.log(tipo);
            if (tipo == 'activacion') {
                const usuario = yield Usuario.find({ estado: false, "nombre": { '$regex': `^${id}`, '$options': 'i' } });
                res.json(usuario);
                console.log('modulo activacion de usuario');
            }
            if (tipo == '') {
                // const usuario = await Usuario.findById(id).populate('nombre');
                // const usuario = await Usuario.find({estado:true,$or:[{'ubicacion':id},{ "nombre": {'$regex': `^${id}`,'$options': 'i'}},{ "ubicaciones": {'$regex': `^${id}`,'$options': 'i'}}]})
                const usuario = yield Usuario.aggregate([
                    { "$lookup": {
                            from: "ubicacions",
                            foreignField: "id_ubicacion",
                            localField: "ubicaciones",
                            as: "Descripcion"
                        } },
                    { $unwind: "$Descripcion" },
                    { $match: { $or: [{ 'ubicacion': id }, { "nombre": { '$regex': `^${id}`, '$options': 'i' } }, { "ubicaciones": { '$regex': `^${id}`, '$options': 'i' } }, { 'Descripcion.descripcion': { '$regex': `^${id}`, '$options': 'i' } }] } },
                    //   { $match: },
                    { $match: { estado: true } },
                ]);
                res.json(usuario);
                console.log('usuarios activos-ubicacion');
            }
            if (tipo == 'activo') {
                // const usuario = await Usuario.findById(id).populate('nombre');
                const usuario = yield Usuario.find({ estado: true, $or: [{ 'ubicacion': id }, { "nombre": { '$regex': `^${id}`, '$options': 'i' } }, { "ubicaciones": { '$regex': `^${id}`, '$options': 'i' } }] });
                res.json(usuario);
                console.log('usuarios activos');
            }
        });
        this.usuariosPut = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id, password, google } = _a, resto = __rest(_a, ["_id", "password", "google"]);
            var { tipo } = req.query;
            if (tipo == 'activacion') {
                const usuario = yield Usuario.findByIdAndUpdate(id, resto);
                res.json({
                    msg: 'Actualizado',
                    usuario
                });
                console.log('actualizar estado');
            }
            if (tipo == '') {
                if (password) {
                    const salt = bcryptjs.genSaltSync();
                    resto.password = bcryptjs.hashSync(password, salt);
                }
                const usuario = yield Usuario.findByIdAndUpdate(id, resto);
                res.json({
                    msg: 'Actualizado',
                    usuario
                });
                console.log('actualizacion');
            }
        });
        this.usuariosPost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { nombre, correo, password, numero_cel, ubicacion, transacciones, ubicaciones } = req.body;
            // const ubicacion = req.body.ubicacion.toUpperCase();
            const usuario = new Usuario({ nombre, correo, numero_cel, password, ubicacion, transacciones, ubicaciones });
            const salt = bcryptjs.genSaltSync();
            usuario.password = bcryptjs.hashSync(password, salt);
            yield usuario.save();
            res.json({
                usuario
            });
        });
        this.usuariosDelete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, estado } = req.params;
            const usuario = yield Usuario.findById(id, estado);
            if (usuario.estado == true) {
                //const { id } = req.params;
                const usuario = yield Usuario.findByIdAndUpdate(id, { estado: false });
                const usuarioAutenticado = req.usuario;
                console.log(req.usuario);
                res.json({
                    usuario,
                    usuarioAutenticado
                });
                // console.log('El usuario: '+ usuario.nombre +' fue eliminado/inhabilitado '+ 'por '+ usuarioAutenticado.nombre);
            }
            else {
                res.json({
                    msg: 'El usuario no existe o ya fue eliminado'
                });
                //console.log(usuario.estado);
            }
        });
        this.usuariosPatch = (req, res) => {
            res.json({
                msg: 'Patch'
            });
        };
    }
}
exports.usuarios = usuarios;
exports.default = new usuarios();
