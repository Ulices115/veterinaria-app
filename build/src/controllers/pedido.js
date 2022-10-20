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
exports.pedido = void 0;
const Pedido = require("../models/pedido");
class pedido {
    constructor() {
        this.crearpedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const session = yield Pedido.startSession();
            session.startTransaction();
            const rfc = req.body.rfc.toUpperCase();
            const id_pedido = req.body.id_pedido;
            const id_b_p = req.body.id_b_p;
            const fecha = req.body.fecha;
            console.log(id_pedido);
            const pedidoDB = yield Pedido.findOne({ id_pedido });
            if (pedidoDB) {
                return res.status(400).json({
                    msg: `el pedido ${id_pedido} ya existe`
                });
            }
            const data = {
                id_pedido,
                rfc,
                id_b_p,
                fecha
            };
            try {
                // TODO Add your statement here
                console.log(data);
                const pedido = yield new Pedido(data);
                yield pedido.save({ session });
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
        this.obtenerpedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
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
                const pedido = yield Pedido.find().count();
                res.json(pedido);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerpedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var { tipo } = req.query;
            console.log(tipo);
            if (tipo == 'factura') {
                const pedido = yield Pedido.find({ cancelado: false, $and: [{ 'id_pedido': { '$regex': `^${id}`, '$options': 'i' } }, { status_f: 'no pagado' }] }).limit(10);
                res.json(pedido);
                console.log(pedido);
                console.log('tipo factura');
            }
            if (tipo == '') {
                const pedido = yield Pedido.find({ cancelado: false, 'id_pedido': id });
                res.json(pedido);
                console.log(pedido);
                console.log('sin tipo');
            }
            if (tipo == 'filtro') {
                //  const pedido = await Pedido.find({cancelado:false,$and:[{'id_pedido': {'$regex': `^${id}`,'$options': 'i'}},{$or:[{status_f:'no pagado'},{status_f:'pagado'}]}]}).limit(10);
                const pedido = yield Pedido.find({ cancelado: false, $and: [{ 'id_pedido': { '$regex': `^${id}`, '$options': 'i' } }, { status_f: 'no pagado' }, { status_log: 'pendiente' }] }).limit(10);
                res.json(pedido);
                console.log(pedido);
                console.log('sin tipo');
            }
            if (tipo == 'lista') {
                const pedido = yield Pedido.find({ cancelado: false, $nor: [{ $and: [{ status_f: 'pagado' }, { $or: [{ status_log: 'entregado' }, { status_log: 'realizado' }] }] }], $or: [{ 'status_f': id }, { 'status_log': id }] });
                res.json(pedido);
                console.log('lista');
            }
            if (tipo == 'devolucion') {
                const pedido = yield Pedido.find({ cancelado: false, $and: [{ 'id_pedido': { '$regex': `^${id}`, '$options': 'i' } }, { status_f: 'pagado' }, { $or: [{ status_log: 'entregado' }, { status_log: 'realizado' }] }] }).limit(10);
                res.json(pedido);
                console.log(pedido);
                console.log('en devolucion');
            }
            if (tipo == 'pagado') {
                const pedido = yield Pedido.find({ cancelado: false, $and: [{ 'id_pedido': { '$regex': `^${id}`, '$options': 'i' } }, { status_log: 'entregado' }] }).limit(10);
                res.json(pedido);
                console.log(pedido);
                console.log('en devolucion');
            }
            console.log('Registro encontrado');
        });
        this.borrarpedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let pedido = yield Pedido.findById(req.params.id);
                if (!pedido) {
                    res.status(404).json({ msg: 'No existe el pedido' });
                }
                yield Pedido.findByIdAndUpdate(req.params.id, { cancelado: true }, { new: true });
                // await Pedido.findOneAndRemove({ _id: req.params.id })
                res.json({ msg: 'Pedido eliminado con exito' });
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
        this.actualizarpedido = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            const pedido = yield Pedido.updateOne({ "id_pedido": id }, data, { new: true });
            if (pedido) {
                res.json({
                    pedido
                });
            }
        });
    }
}
exports.pedido = pedido;
exports.default = new pedido();
