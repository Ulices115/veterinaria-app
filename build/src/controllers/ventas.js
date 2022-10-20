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
exports.reporteventas = void 0;
const Pedido = require("../models/pedido");
const Pedidodetalle = require("../models/pedidodetalle");
class reporteventas {
    constructor() {
        this.obtenerpedidos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(id);
            try {
                const pedidos = yield Pedido.aggregate([{ $match: { "$expr": {
                                "$and": [
                                    { $eq: [{ $year: "$fecha" }, { $year: new Date(id) }] },
                                    { $eq: [{ $month: "$fecha" }, { $month: new Date(id) }] },
                                    { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(id) }] },
                                ]
                            } } }, { $match: { status_f: 'pagado' } },
                    { "$lookup": {
                            from: "pedidodetalles",
                            foreignField: "id_pedido",
                            localField: "id_pedido",
                            as: "detalles"
                        } },
                    { $unwind: "$detalles" }
                ]);
                res.json(pedidos);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.reporteventas = reporteventas;
exports.default = new reporteventas();
