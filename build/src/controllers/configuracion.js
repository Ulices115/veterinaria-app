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
exports.configuracion = void 0;
const Configuracion = require("../models/configuracion");
class configuracion {
    constructor() {
        this.crearconfiguracion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const rfc = req.body.rfc.toUpperCase();
            const razon_social = req.body.razon_social;
            const regimen_f = req.body.regimen_f;
            const lugar_exp = req.body.lugar_exp;
            const correo = req.body.correo;
            const password = req.body.password;
            const exportacion = req.body.exportacion;
            const moneda = req.body.moneda;
            const serie = req.body.serie;
            const tipo_comprobante = req.body.tipo_comprobante;
            const certificado = req.body.certificado;
            const key = req.body.key;
            // const configDB = await Configuracion.findOne({razon_social});
            // if(configDB){
            //     return res.status(400).json({
            //         msg: `la entidad ${razon_social} ya existe`
            //     })
            // } 
            const data = {
                rfc,
                razon_social,
                regimen_f,
                lugar_exp,
                correo,
                password,
                exportacion,
                moneda,
                serie,
                tipo_comprobante,
                certificado,
                key,
            };
            console.log(data);
            const confi = yield new Configuracion(data);
            yield confi.save();
            console.log('Registro agregado');
            res.status(200).json(data);
        });
        this.obtenerconfiguracion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                const configuracion = yield Configuracion.find({ 'razon_social': 'INDISTRIA ILUMINADORA DE ALMACENES' });
                res.json(configuracion);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registro encontrado');
        });
        this.obtenerconfiguraciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                console.log(id);
                const configuracion = yield Configuracion.find();
                res.json(configuracion);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registro encontrado');
        });
        this.actualizarconfiguracion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const _a = req.body, { _id } = _a, data = __rest(_a, ["_id"]);
            data.rfc = data.rfc.toUpperCase();
            data.moneda = data.moneda.toUpperCase();
            const configuracion = yield Configuracion.findByIdAndUpdate(id, data, { new: true });
            if (configuracion) {
                res.json({
                    trans: configuracion
                });
            }
        });
    }
}
exports.configuracion = configuracion;
exports.default = new configuracion();
