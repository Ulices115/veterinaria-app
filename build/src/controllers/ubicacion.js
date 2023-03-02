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
exports.ubicacion = void 0;
const Ubicacion = require("../models/ubicacion");
class ubicacion {
    constructor() {
        this.crearubicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const descripcion = req.body.descripcion.toUpperCase();
            const id_ubicacion = req.body.id_ubicacion;
            const ubicacionDB = yield Ubicacion.findOne({ id_ubicacion });
            if (ubicacionDB) {
                return res.status(400).json({
                    msg: `la ubicacion ${id_ubicacion} ya existe`
                });
            }
            const data = {
                id_ubicacion,
                descripcion,
            };
            console.log(data);
            const ubicacion = yield new Ubicacion(data);
            yield ubicacion.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerubicaciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ubicacion = yield Ubicacion.find().count();
                res.json(ubicacion);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerubicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const ubicacion = yield Ubicacion.find({ activo: true, $or: [{ 'descripcion': { '$regex': id, '$options': 'i' } }, { 'id_ubicacion': { '$regex': id, '$options': 'i' } }] }).sort({ descripcion: 1 }).limit(10);
            res.json(ubicacion);
            console.log('Registro encontrado');
        });
        this.actualizarubicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.id_ubicacion = data.id_ubicacion.toUpperCase();
            data.descripcion = data.descripcion.toUpperCase();
            const prod = yield Ubicacion.findByIdAndUpdate(id, data, { new: true });
            if (prod) {
                res.json({
                    prod
                });
            }
        });
        this.borrarubicacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let ubi = yield Ubicacion.findById(req.params.id);
                if (!ubi) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                // await Producto.findOneAndRemove({ _id: req.params.id })
                yield Ubicacion.findByIdAndUpdate({ _id: req.params.id }, { activo: false });
                res.json({ msg: 'ubicacion eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.ubicacion = ubicacion;
exports.default = new ubicacion();
