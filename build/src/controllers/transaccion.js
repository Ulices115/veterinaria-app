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
const Transaccion = require("../models/transacciones");
class transacciones {
    constructor() {
        this.creartransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const modulo = req.body.modulo.toUpperCase();
            const transaccion = req.body.transaccion.toUpperCase();
            const referencia = req.body.referencia.toUpperCase();
            const descripcion = req.body.descripcion;
            const transaccionDB = yield Transaccion.findOne({ referencia });
            if (transaccionDB) {
                return res.status(400).json({
                    msg: `la transaccion ${referencia} ya existe`
                });
            }
            const data = {
                modulo,
                transaccion,
                referencia,
                descripcion,
            };
            console.log(data);
            const trans = yield new Transaccion(data);
            yield trans.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenertransacciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const trans = yield Transaccion.find().count();
                res.json(trans);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenertransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const trans = yield Transaccion.find({ activo: true, 'referencia': { '$regex': id, '$options': 'i' } }).sort({ descripcion: 1 }).limit(10);
            res.json(trans);
            console.log('Registro encontrado');
        });
        this.actualizartransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.transaccion = data.transaccion.toUpperCase();
            const trans = yield Transaccion.findByIdAndUpdate(id, data, { new: true });
            if (trans) {
                res.json({
                    trans
                });
            }
        });
        this.borrartransaccion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let trans = yield Transaccion.findById(req.params.id);
                if (!trans) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                // await Producto.findOneAndRemove({ _id: req.params.id })
                yield Transaccion.findByIdAndUpdate({ _id: req.params.id }, { activo: false });
                res.json({ msg: 'transaccion eliminado con exito' });
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
