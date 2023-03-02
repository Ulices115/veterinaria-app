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
            const f_ini = String(req.query.f_ini);
            const f_fin = String(req.query.f_fin);
            const seleccion2 = req.query.seleccion2;
            if (id == 'todos' && seleccion2 !== 'todos') {
                const pedido = yield Pedido.aggregate([{ $match: { cancelado: false, $and: [{ 'status_f': seleccion2 }] } },
                    { $match: { fecha: { $gte: new Date(f_ini), $lte: new Date(f_fin) } } },
                    { "$lookup": {
                            from: "b_ps",
                            foreignField: "id_b_p",
                            localField: "id_b_p",
                            as: "socio"
                        } },
                    { $unwind: "$socio" },
                    { "$lookup": {
                            from: "pedidodetalles",
                            foreignField: "id_pedido",
                            localField: "id_pedido",
                            as: "detalles"
                        } },
                    { $unwind: "$detalles" }
                ]);
                res.json(pedido);
            }
            if (id !== 'todos' && seleccion2 == 'todos') {
                const pedido = yield Pedido.aggregate([{ $match: { cancelado: false, $and: [{ 'status_log': id }] } },
                    { $match: { fecha: { $gte: new Date(f_ini), $lte: new Date(f_fin) } } },
                    { "$lookup": {
                            from: "b_ps",
                            foreignField: "id_b_p",
                            localField: "id_b_p",
                            as: "socio"
                        } },
                    { $unwind: "$socio" },
                    { "$lookup": {
                            from: "pedidodetalles",
                            foreignField: "id_pedido",
                            localField: "id_pedido",
                            as: "detalles"
                        } },
                    { $unwind: "$detalles" }
                ]);
                res.json(pedido);
            }
            if (id == 'todos' && seleccion2 == 'todos') {
                const pedido = yield Pedido.aggregate([{ $match: { cancelado: false } },
                    { $match: { fecha: { $gte: new Date(f_ini), $lte: new Date(f_fin) } } },
                    { "$lookup": {
                            from: "b_ps",
                            foreignField: "id_b_p",
                            localField: "id_b_p",
                            as: "socio"
                        } },
                    { $unwind: "$socio" },
                    { "$lookup": {
                            from: "pedidodetalles",
                            foreignField: "id_pedido",
                            localField: "id_pedido",
                            as: "detalles"
                        } },
                    { $unwind: "$detalles" }
                ]);
                res.json(pedido);
            }
            if (id !== 'todos' && seleccion2 !== 'todos') {
                const pedido = yield Pedido.aggregate([{ $match: { cancelado: false, $and: [{ 'status_f': seleccion2 }, { 'status_log': id }] } },
                    { $match: { fecha: { $gte: new Date(f_ini), $lte: new Date(f_fin) } } },
                    { "$lookup": {
                            from: "b_ps",
                            foreignField: "id_b_p",
                            localField: "id_b_p",
                            as: "socio"
                        } },
                    { $unwind: "$socio" },
                    { "$lookup": {
                            from: "pedidodetalles",
                            foreignField: "id_pedido",
                            localField: "id_pedido",
                            as: "detalles"
                        } },
                    { $unwind: "$detalles" }
                ]);
                res.json(pedido);
            }
        });
    }
}
exports.reporteventas = reporteventas;
exports.default = new reporteventas();
