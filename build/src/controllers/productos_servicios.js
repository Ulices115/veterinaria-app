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
exports.producto_servicio = void 0;
const Productos_servicios = require("../models/productos_servicios");
class producto_servicio {
    constructor() {
        this.crearprod_serv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const descripcion = req.body.descripcion.toUpperCase();
            const id_prod_serv = req.body.id_prod_serv;
            const codigo_barra = req.body.codigo_barra;
            const tipo = req.body.tipo;
            const clave_prod_serv = req.body.clave_prod_serv;
            const clave_unidad = req.body.clave_unidad;
            const unidad = req.body.unidad;
            const objeto_imp = req.body.objeto_imp;
            const impuesto = req.body.impuesto;
            const tipo_factor = req.body.tipo_factor;
            const tasa_cuota = req.body.tasa_cuota;
            console.log(id_prod_serv);
            const productoDB = yield Productos_servicios.findOne({ id_prod_serv });
            if (productoDB) {
                return res.status(400).json({
                    msg: `el producto ${id_prod_serv} ya existe`
                });
            }
            const data = {
                id_prod_serv,
                descripcion,
                codigo_barra,
                tipo,
                clave_prod_serv,
                clave_unidad,
                unidad,
                objeto_imp,
                impuesto,
                tipo_factor,
                tasa_cuota
            };
            console.log(data);
            const producto_servicio = yield new Productos_servicios(data);
            yield producto_servicio.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerprod_servs = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const producto_servicio = yield Productos_servicios.find().count();
                res.json(producto_servicio);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerprod_serv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var { tipo } = req.query;
            console.log('tipo', tipo);
            const producto_servicio = yield Productos_servicios.find({ activo: true, $and: [{ $or: [{ 'descripcion': { '$regex': `^${id}`, '$options': 'i' } }, { 'codigo_barra': { '$regex': `^${id}`, '$options': 'i' } }] }, { 'tipo': tipo }] }).limit(10);
            res.json(producto_servicio);
            console.log('Registro encontrado');
        });
        this.actualizarprod_serv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            // data.id_prod_serv = data.id_prod_serv.toUpperCase();
            data.descripcion = data.descripcion.toUpperCase();
            // data.codigo_barra=data.codigo_barra
            // data.tipo=data.tipo
            const prod = yield Productos_servicios.findByIdAndUpdate(id, data, { new: true });
            if (prod) {
                res.json({
                    prod
                });
            }
        });
        this.borrarprod_serv = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let producto_servicio = yield Productos_servicios.findById(req.params.id);
                if (!producto_servicio) {
                    res.status(404).json({ msg: 'No existe el servicio/producto' });
                }
                // await Producto.findOneAndRemove({ _id: req.params.id })
                yield Productos_servicios.findByIdAndUpdate({ _id: req.params.id }, { activo: false });
                res.json({ msg: 'Producto/servicio eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.producto_servicio = producto_servicio;
exports.default = new producto_servicio();
