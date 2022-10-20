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
exports.codigopostal = void 0;
const Codigop = require("../models/codigop");
class codigopostal {
    constructor() {
        this.obtenercodigop = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                const cod = yield Codigop.aggregate([{ $match: { c_CodigoPostal: Number(id) } },
                    { "$lookup": {
                            from: "estados",
                            foreignField: "estado_fiscal",
                            localField: "c_Estado",
                            as: "estado"
                        } },
                    { $unwind: "$estado" },
                    // { "$lookup": {
                    //     from: "municipios",
                    //     foreignField:"c_Estado",
                    //     localField:"c_Estado",
                    //     as: "municipio"
                    //   }},
                    //   { $unwind: "$municipio"},
                ]);
                res.json(cod);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.codigopostal = codigopostal;
exports.default = new codigopostal();
