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
exports.producto = void 0;
const Producto = require("../models/producto");
class producto {
    constructor() {
        this.crearproducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const descripcion = req.body.descripcion.toUpperCase();
            const id_producto = req.body.id_producto;
            const codigo_barra = req.body.codigo_barra;
            console.log(id_producto);
            const productoDB = yield Producto.findOne({ id_producto });
            if (productoDB) {
                return res.status(400).json({
                    msg: `el producto ${id_producto} ya existe`
                });
            }
            const data = {
                id_producto,
                descripcion,
                codigo_barra
            };
            console.log(data);
            const producto = yield new Producto(data);
            yield producto.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerproductos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producto = yield Producto.find().count();
                res.json(producto);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerproducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield Producto.find({ activo: true, 'descripcion': { '$regex': `^${id}`, '$options': 'i' } }).limit(10);
            res.json(producto);
            console.log('Registro encontrado');
        });
        this.actualizarproducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.id_producto = data.id_producto.toUpperCase();
            data.descripcion = data.descripcion.toUpperCase();
            data.codigo_barra = data.codigo_barra;
            const prod = yield Producto.findByIdAndUpdate(id, data, { new: true });
            if (prod) {
                res.json({
                    prod
                });
            }
        });
        this.borrarproducto = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let produc = yield Producto.findById(req.params.id);
                if (!produc) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                // await Producto.findOneAndRemove({ _id: req.params.id })
                yield Producto.findByIdAndUpdate({ _id: req.params.id }, { activo: false });
                res.json({ msg: 'Producto eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.producto = producto;
exports.default = new producto();
