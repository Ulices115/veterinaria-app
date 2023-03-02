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
exports.factura = void 0;
const Factura = require("../models/factura");
class factura {
    constructor() {
        this.crearfactura = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_factura = req.body.id_factura.toUpperCase();
            const id_pedido = req.body.id_pedido.toUpperCase();
            const xml = req.body.xml;
            const pdf = req.body.pdf;
            console.log(id_factura);
            const facturaDB = yield Factura.findOne({ id_factura });
            if (facturaDB) {
                return res.status(400).json({
                    msg: `la factura ${id_factura} ya existe`
                });
            }
            const data = {
                id_factura,
                id_pedido,
                xml,
                pdf
            };
            console.log('factura creada');
            // console.log(data)    
            const factura = yield new Factura(data);
            yield factura.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerfacturas = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const factura = yield Factura.find().count();
                res.json(factura);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerfactura = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const factura = yield Factura.find({ 'id_pedido': id });
                res.json(factura);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.factura = factura;
exports.default = new factura();
