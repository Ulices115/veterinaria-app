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
exports.transacciones = void 0;
const Usuario_Transaccion = require("../models/usuario_transaccion");
class transacciones {
    constructor() {
        this.crearUtransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const _id_usuario = req.body.id_usuario;
            const transaccion = req.body.transaccion;
            const transaccionDB = yield Usuario_Transaccion.findOne({ _id_usuario });
            if (transaccionDB) {
                return res.status(400).json({
                    msg: `El Usuario-transaccion ${_id_usuario} ya existe`
                });
            }
            const data = {
                _id_usuario,
                transaccion
            };
            console.log(data);
            const trans = yield new Usuario_Transaccion(data);
            yield trans.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerUtransacciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const trans = yield Usuario_Transaccion.find().count();
                res.json(trans);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerUtransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            const trans = yield Usuario_Transaccion.findOne({ '_id_usuario': id });
            res.json(trans);
            console.log('Registro encontrado');
        });
        this.actualizarUtransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            const trans = yield Usuario_Transaccion.findByIdAndUpdate(id, data, { new: true });
            if (trans) {
                res.json({
                    trans
                });
            }
        });
        this.borrarUtransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let trans = yield Usuario_Transaccion.findById(req.params.id);
                if (!trans) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                yield Usuario_Transaccion.findOneAndRemove({ _id: req.params.id });
                // await Usuario_Transaccion.findByIdAndUpdate({_id:req.params.id},{activo:false})
                res.json({ msg: 'Utransaccion eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.transacciones = transacciones;
exports.default = new transacciones();
