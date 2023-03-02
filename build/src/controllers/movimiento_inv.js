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
exports.movimiento_inv = void 0;
const movimientos = require("../models/movimientos_inv");
class movimiento_inv {
    constructor() {
        this.movimiento = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const referencia = req.body.referencia.toUpperCase();
            const ubicacion = req.body.ubicacion.toUpperCase();
            const fecha = req.body.fecha;
            const tipo = req.body.tipo;
            const tipo_ajuste = req.body.tipo_ajuste;
            const cantidad_inicial = req.body.cantidad_inicial;
            const cantidad_final = req.body.cantidad_final;
            const data = {
                referencia,
                ubicacion,
                fecha,
                tipo,
                tipo_ajuste,
                cantidad_inicial,
                cantidad_final
            };
            console.log('movimiento_inv creada');
            // console.log(data)    
            const movimiento = yield new movimientos(data);
            yield movimiento.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
    }
}
exports.movimiento_inv = movimiento_inv;
exports.default = new movimiento_inv();
