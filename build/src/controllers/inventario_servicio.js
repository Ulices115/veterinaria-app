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
exports.servicio = void 0;
const Servicio = require("../models/inventario_servicios");
class servicio {
    constructor() {
        this.crearservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_inventario = req.body.id_inventario;
            const id_servicio = req.body.id_servicio;
            const precio = req.body.precio;
            const costo = req.body.costo;
            const ubicacion = req.body.ubicacion;
            console.log(id_inventario);
            const servicioDB = yield Servicio.findOne({ id_inventario });
            if (servicioDB) {
                return res.status(400).json({
                    msg: `el id_inventario ${id_inventario} ya existe`
                });
            }
            const data = {
                id_inventario,
                id_servicio,
                precio,
                costo,
                ubicacion
            };
            console.log(data);
            const servicio = yield new Servicio(data);
            yield servicio.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerservicios = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const { limite = 5, desde = 0 } = req.query;
            // const query = { activo: true }    
            // const [total,servicios] = await Promise.all([
            //     Servicio.countDocuments(query),
            //     Servicio.find(query)
            //     // .populate('_id')
            //     .skip(Number(desde))
            //     .limit(Number(limite))
            // ]);
            // res.json({
            //     total,
            //     servicios
            // });
            // otra forma
            try {
                const servicios = yield Servicio.find().count();
                res.json(servicios);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var { ubi } = req.query;
            console.log(ubi, id);
            const servicio = yield Servicio.aggregate([
                { "$lookup": {
                        from: "ubicacions",
                        foreignField: "id_ubicacion",
                        localField: "ubicacion",
                        as: "ubicacion"
                    } },
                { $unwind: "$ubicacion" },
                { $match: { 'ubicacion.id_ubicacion': ubi } },
                { "$lookup": {
                        from: "servicios",
                        foreignField: "id_servicio",
                        localField: "id_servicio",
                        as: "servicios"
                    } },
                { $unwind: "$servicios" },
                { $match: { 'servicios.descripcion': { '$regex': `^${id}`, '$options': 'i' } } },
                { $match: { activo: true } },
            ]).sort({ 'servicios.descripcion': 1 }).limit(10);
            res.json(servicio);
            console.log('Registro encontrado');
        });
        this.borrarservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let servi = yield Servicio.findById(req.params.id);
                if (!servi) {
                    res.status(404).json({ msg: 'No existe el servicio' });
                }
                yield Servicio.findByIdAndUpdate(req.params.id, { activo: false }, { new: true });
                // await Servicio.findOneAndRemove({ _id: req.params.id })
                res.json({ msg: 'servicio eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
        this.actualizarservicio = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.id_servicio = data.id_servicio;
            data.id_inventario = data.id_inventario;
            data.precio = data.precio;
            data.costo = data.costo;
            data.ubicacion = data.ubicacion;
            const servi = yield Servicio.findByIdAndUpdate(id, data, { new: true });
            if (servi) {
                res.json({
                    servi
                });
            }
        });
    }
}
exports.servicio = servicio;
exports.default = new servicio();
