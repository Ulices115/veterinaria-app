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
exports.auditoria = void 0;
const Auditoria = require("../models/auditoria");
class auditoria {
    constructor() {
        this.auditorias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_inventario = req.body.id_inventario.toUpperCase();
            const usuario = req.body.usuario.toUpperCase();
            const fecha = req.body.fecha;
            const razon = req.body.razon;
            const tipo_ajuste = req.body.tipo_ajuste;
            const valor_anterior = req.body.valor_anterior;
            const nuevo_valor = req.body.nuevo_valor;
            // const auditoriaDB = await Auditoria.findOne({ });
            // if(auditoriaDB){
            //     return res.status(400).json({
            //         msg: `el pedido ${} ya existe`
            //     })
            // } 
            const data = {
                id_inventario,
                usuario,
                fecha,
                razon,
                tipo_ajuste,
                valor_anterior,
                nuevo_valor
            };
            console.log('auditoria creada');
            // console.log(data)    
            const auditoria = yield new Auditoria(data);
            yield auditoria.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerauditorias = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const auditoria = yield Auditoria.find();
                res.json(auditoria);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.auditoria = auditoria;
exports.default = new auditoria();
