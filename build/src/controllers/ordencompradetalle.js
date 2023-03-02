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
exports.ordenD = void 0;
const ObjectId = require('mongoose').Types.ObjectId;
const Ordendetalle = require("../models/ordencompradetalle");
class ordenD {
    constructor() {
        this.crearordenD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const session = yield Ordendetalle.startSession();
            session.startTransaction();
            const id_orden = req.query.id;
            const producto = req.body.producto;
            const cantidad = req.body.cantidad;
            const costo = req.body.costo;
            const importe = req.body.importe;
            console.log(id_orden);
            const data = {
                id_orden,
                producto,
                cantidad,
                costo,
                importe
            };
            try {
                console.log(data);
                const ordend = yield new Ordendetalle(data);
                yield ordend.save();
                console.log('Registro agregado');
                res.status(200).json(data);
                yield session.commitTransaction();
            }
            catch (error) {
                session.abortTransaction();
                session.endSession();
                throw error;
            }
            finally {
                session.endSession();
            }
        });
        this.obtenerordenesD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ordend = yield Ordendetalle.find();
                res.json(ordend);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerordenD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // const ordend = await Ordendetalle.find({activo:true,"id_orden":id.toUpperCase()});
            const ordend = yield Ordendetalle.aggregate([{ $match: { "id_orden": id.toUpperCase() } },
                { "$lookup": {
                        from: "productos_servicios",
                        foreignField: "id_prod_serv",
                        localField: "producto",
                        as: "productos_servicios"
                    } },
                { $unwind: "$productos_servicios" },
                { $match: { activo: true } }]);
            res.json(ordend);
            console.log('Registro encontrado');
        });
        this.borrarordenD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let ordend = yield Ordendetalle.find({ "id_orden": req.params.id });
                if (!ordend) {
                    res.status(404).json({ msg: 'No existe la orden' });
                }
                if (ObjectId.isValid(req.params.id)) {
                    yield Ordendetalle.findOneAndRemove({ _id: req.params.id });
                    res.json({ msg: 'Ordendetalle eliminado con exito' });
                }
                else {
                    yield Ordendetalle.updateMany({ "id_orden": req.params.id }, { activo: false }, { new: true });
                    res.json({ msg: 'ordendetalle cancelado con exito' });
                }
                // await Pedidodetalle.findOneAndRemove({ _id: req.params.id })
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
    }
}
exports.ordenD = ordenD;
exports.default = new ordenD();
