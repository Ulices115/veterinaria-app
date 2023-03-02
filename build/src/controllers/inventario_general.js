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
exports.Inventario = void 0;
const inventario_general = require("../models/inventario_general");
class Inventario {
    constructor() {
        this.crearinventario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_inventario = req.body.id_inventario;
            const id_prod_serv = req.body.id_prod_serv;
            const precio = req.body.precio;
            const cantidad = req.body.cantidad;
            const ubicacion = req.body.ubicacion;
            const costo = req.body.costo;
            const tipo = req.body.tipo;
            const inventarioDB = yield inventario_general.findOne({ id_inventario });
            if (inventarioDB) {
                return res.status(400).json({
                    msg: `el inventario ${id_inventario} ya existe`
                });
            }
            const data = {
                id_inventario,
                id_prod_serv,
                precio,
                cantidad,
                ubicacion,
                costo,
                tipo
            };
            console.log(data);
            const inventario = yield new inventario_general(data);
            yield inventario.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerinventarios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const inventario = yield inventario_general.find().count();
                res.json(inventario);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerinventario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var { id } = req.params;
            var { ubi, tipo, consulta } = req.query;
            console.log(consulta);
            if (tipo !== '') {
                if (consulta !== '') {
                    const inventario = yield inventario_general.aggregate([
                        { "$lookup": {
                                from: "ubicacions",
                                foreignField: "id_ubicacion",
                                localField: "ubicacion",
                                as: "ubicacion"
                            } },
                        { $unwind: "$ubicacion" },
                        { "$lookup": {
                                from: "productos_servicios",
                                foreignField: "id_prod_serv",
                                localField: "id_prod_serv",
                                as: "productos_servicios"
                            } },
                        { $unwind: "$productos_servicios" },
                        { $match: { $and: [{ 'tipo': tipo }, { $or: [{ 'productos_servicios.descripcion': { '$regex': `^${id}`, '$options': 'i' } }, { 'productos_servicios.codigo_barra': { '$regex': `^${id}`, '$options': 'i' } }] }] } },
                        { $match: { activo: true } },
                    ]).sort({ 'productos_servicios.descripcion': 1 }).limit(10);
                    res.json(inventario);
                    console.log('Registro encontrados en consulta');
                }
                else {
                    const inventario = yield inventario_general.aggregate([
                        { "$lookup": {
                                from: "ubicacions",
                                foreignField: "id_ubicacion",
                                localField: "ubicacion",
                                as: "ubicacion"
                            } },
                        { $unwind: "$ubicacion" },
                        { $match: { 'ubicacion.id_ubicacion': ubi } },
                        { "$lookup": {
                                from: "productos_servicios",
                                foreignField: "id_prod_serv",
                                localField: "id_prod_serv",
                                as: "productos_servicios"
                            } },
                        { $unwind: "$productos_servicios" },
                        { $match: { $and: [{ 'tipo': tipo }, { $or: [{ 'productos_servicios.descripcion': { '$regex': `^${id}`, '$options': 'i' } }, { 'productos_servicios.codigo_barra': { '$regex': `^${id}`, '$options': 'i' } }] }] } },
                        { $match: { activo: true } },
                    ]).sort({ 'productos_servicios.descripcion': 1 }).limit(10);
                    res.json(inventario);
                    console.log('Registro encontrado baja-ajuste-orden');
                }
            }
            if (tipo == '') {
                const inventario = yield inventario_general.aggregate([
                    { "$lookup": {
                            from: "ubicacions",
                            foreignField: "id_ubicacion",
                            localField: "ubicacion",
                            as: "ubicacion"
                        } },
                    { $unwind: "$ubicacion" },
                    { $match: { 'ubicacion.id_ubicacion': ubi } },
                    { "$lookup": {
                            from: "productos_servicios",
                            foreignField: "id_prod_serv",
                            localField: "id_prod_serv",
                            as: "productos_servicios"
                        } },
                    { $unwind: "$productos_servicios" },
                    { $match: { $or: [{ 'productos_servicios.descripcion': { '$regex': `^${id}`, '$options': 'i' } }, { 'productos_servicios.codigo_barra': { '$regex': `^${id}`, '$options': 'i' } }] } },
                    //   { $match: {'productos_servicios.codigo_barra': {'$regex': `^${id}`,'$options': 'i'}}},
                    { $match: { activo: true } },
                ]).sort({ 'productos_servicios.descripcion': 1 }).limit(10);
                res.json(inventario);
                console.log('Registro encontrado pedido');
            }
        });
        this.actualizarinventario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.id_prod_serv = data.id_prod_serv.toUpperCase();
            data.id_inventario = data.id_inventario;
            data.precio = data.precio;
            data.costo = data.costo;
            // data.cantidad=data.cantidad;
            data.ubicacion = data.ubicacion;
            data.tipo = data.tipo;
            const inventario = yield inventario_general.findByIdAndUpdate(id, data, { new: true });
            if (inventario) {
                res.json({
                    prod: inventario
                });
            }
        });
        this.borrarinventario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let inventario = yield inventario_general.findById(req.params.id);
                if (!inventario) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                // await Producto.findOneAndRemove({ _id: req.params.id })
                yield inventario_general.findByIdAndUpdate({ _id: req.params.id }, { activo: false });
                res.json({ msg: 'Producto eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.Inventario = Inventario;
exports.default = new Inventario();
