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
exports.orden = void 0;
const Ordendetalle = require("../models/ordencompradetalle");
const Orden = require("../models/ordencompra");
const inventario_general = require("../models/inventario_general");
const movimientos = require("../models/movimientos_inv");
class orden {
    constructor() {
        this.crearorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const session = yield Orden.startSession();
            session.startTransaction();
            const rfc = req.body.rfc.toUpperCase();
            const id_orden = req.body.id_orden;
            const id_b_p = req.body.id_b_p;
            const fecha = req.body.fecha;
            const ubicacion = req.body.ubicacion;
            console.log(id_orden);
            const ordenDB = yield Orden.findOne({ id_orden });
            if (ordenDB) {
                return res.status(400).json({
                    msg: `la orden ${id_orden} ya existe`
                });
            }
            const data = {
                id_orden,
                rfc,
                id_b_p,
                ubicacion,
                fecha
            };
            try {
                // TODO Add your statement here
                console.log(data);
                const pedido = yield new Orden(data);
                yield pedido.save();
                console.log('Registro agregado');
                res.status(200).json(data);
                // Commit the changes
                yield session.commitTransaction();
            }
            catch (error) {
                // Rollback any changes made in the database
                session.abortTransaction();
                session.endSession();
                // Rethrow the error
                throw error;
            }
            finally {
                // Ending the session
                session.endSession();
            }
        });
        this.obtenerordenes = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const orden = yield Orden.find().count();
                res.json(orden);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var { ubi } = req.query;
            console.log(ubi);
            // const orden=await Orden.find({'id_orden':id})
            const orden = yield Orden.find({ cancelado: false, ubicacion: ubi, status: 'pendiente', 'id_b_p': id }).sort({ id_orden: 1 }).limit(10);
            res.json(orden);
            console.log(orden);
            console.log('Registro encontrado');
        });
        this.borrarorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let orden = yield Orden.findById(req.params.id);
                if (!orden) {
                    res.status(404).json({ msg: 'No existe la orden' });
                }
                yield Orden.findByIdAndUpdate(req.params.id, { cancelado: true }, { new: true });
                // await Pedido.findOneAndRemove({ _id: req.params.id })
                res.json({ msg: 'Pedido eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
        this.actualizarorden = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            var { ubi } = req.query;
            console.log(ubi);
            console.log(data.id_orden);
            const orden = yield Orden.updateOne({ "id_orden": id }, data, { new: true });
            if (orden) {
                res.json({
                    orden
                });
            }
            const ordendetalle = yield Ordendetalle.find({ 'id_orden': data.id_orden });
            console.log('ordendetalle', ordendetalle);
            for (const producto in ordendetalle) {
                // console.log('producto y cantidad',ordendetalle[producto]['producto'],ordendetalle[producto]['cantidad']);
                const inventarios = yield inventario_general.find({ $and: [{ 'id_prod_serv': ordendetalle[producto]['producto'] }, { ubicacion: ubi }] });
                const nuevaexistencias = inventarios[0]['cantidad'] + ordendetalle[producto]['cantidad'];
                yield inventario_general.updateOne({ $and: [{ id_prod_serv: ordendetalle[producto]['producto'] }, { ubicacion: ubi }] }, { cantidad: nuevaexistencias });
                const datos = {
                    referencia: data.id_orden,
                    ubicacion: ubi,
                    fecha: new Date,
                    tipo: 'Entrada',
                    tipo_ajuste: 'Orden de compra',
                    cantidad_inicial: inventarios[0]['cantidad'],
                    cantidad_final: nuevaexistencias
                };
                console.log('movimiento_inv creada');
                const movimiento = yield new movimientos(datos);
                yield movimiento.save();
            }
        });
    }
}
exports.orden = orden;
exports.default = new orden();
