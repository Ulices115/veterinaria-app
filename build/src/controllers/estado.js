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
exports.estado = void 0;
const estados = require("../models/estado");
class estado {
    constructor() {
        this.obtenerestado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                const estado = yield estados.find({});
                res.json(estado);
                console.log(estado);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerestados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const estado = yield estados.aggregate([
                    { "$lookup": {
                            from: "codigops",
                            foreignField: "c_Estado",
                            localField: "estado_fiscal",
                            as: "estadopostal"
                        } },
                    { $unwind: "$estadopostal" },
                ]);
                res.json(estado);
                console.log(estado);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.estado = estado;
exports.default = new estado();
