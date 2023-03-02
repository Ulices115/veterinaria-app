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
exports.devolucion = void 0;
const Devoluciones = require("../models/devoluciones");
const inventario_general = require("../models/inventario_general");
class devolucion {
    constructor() {
        this.creardevolucion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_devolucion = req.body.id_devolucion.toUpperCase();
            const id_pedido = req.body.id_pedido.toUpperCase();
            const descripcion = req.body.descripcion;
            const cantidad_devuelta = req.body.cantidad_devuelta;
            const precio = req.body.precio;
            const importe = req.body.importe;
            const fecha = req.body.fecha;
            console.log(id_devolucion);
            const devolucionDB = yield Devoluciones.findOne({ id_devolucion });
            if (devolucionDB) {
                return res.status(400).json({
                    msg: `el ${id_devolucion} ya existe`
                });
            }
            const data = {
                id_devolucion,
                id_pedido,
                descripcion,
                cantidad_devuelta,
                precio,
                importe,
                fecha
            };
            console.log('devolucion creada');
            // console.log(data)    
            const devolucion = yield new Devoluciones(data);
            yield devolucion.save();
            console.log('Registro agregado');
            res.status(200).json(data);
            var { ubi } = req.query;
            const inventarios = yield inventario_general.find({ $and: [{ 'id_inventario': req.body.referencia }, { ubicacion: ubi }] });
            const nuevaexistencias = inventarios[0]['cantidad'] + req.body.cantidad_devuelta;
            console.log(nuevaexistencias);
            yield inventario_general.updateOne({ $and: [{ 'id_inventario': req.body.referencia }, { ubicacion: ubi }] }, { cantidad: nuevaexistencias });
        });
        this.obtenerdevoluciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const devolucion = yield Devoluciones.find().count();
                res.json(devolucion);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerdevolucion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const fin = String(req.query.fin);
            console.log('devolucion', id, fin);
            if (id.charAt('P') == 'P') {
                const fecha = new Date();
                //  const devolucion = await Devoluciones.find({activo:true,"id_pedido":id.toUpperCase()});
                const devolucion = yield Devoluciones.aggregate([
                    { $match: { activo: true } },
                    { $match: { 'id_pedido': id.toUpperCase() } },
                    { $match: { "$expr": {
                                "$and": [
                                    { $eq: [{ $year: "$fecha" }, { $year: new Date(fecha) }] },
                                    { $eq: [{ $month: "$fecha" }, { $month: new Date(fecha) }] },
                                    { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(fecha) }] },
                                ]
                            } } }
                ]);
                res.json(devolucion);
            }
            else {
                const devolucion = yield Devoluciones.aggregate([{ $match: { fecha: { $gte: new Date(id), $lte: new Date(fin) } } }
                ]);
                console.log(devolucion);
                res.json(devolucion);
            }
            console.log('Registro encontrado');
        });
    }
}
exports.devolucion = devolucion;
exports.default = new devolucion();
