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
exports.claveusof = void 0;
const clave = require("../models/clave usof");
class claveusof {
    constructor() {
        this.crearclave = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const descripcion = req.body.descripcion;
            const fecha_fin_vigencia = req.body.fecha_fin_vigencia;
            const fecha_inicio_vigencia = req.body.fecha_inicio_vigencia;
            const fisica = req.body.fisica;
            const moral = req.body.moral;
            const id_cfdi = req.body.id_cfdi;
            const regimen_fiscal_receptor = req.body.regimen_fiscal_receptor;
            console.log(id_cfdi);
            const claveDB = yield clave.findOne({ id_cfdi });
            if (claveDB) {
                return res.status(400).json({
                    msg: `el id_cfdi ${id_cfdi} ya existe`
                });
            }
            const data = {
                descripcion,
                fecha_fin_vigencia,
                fecha_inicio_vigencia,
                fisica,
                moral,
                id_cfdi,
                regimen_fiscal_receptor
            };
            console.log(data);
            const clavef = yield new clave(data);
            yield clavef.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerclave = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const claveusof = yield clave.find().sort({ descripcion: 1 });
                res.json(claveusof);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
    }
}
exports.claveusof = claveusof;
exports.default = new claveusof();
