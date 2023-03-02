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
exports.facturapdf = void 0;
const pdf = require("html-pdf");
const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");
class facturapdf {
    constructor() {
        // facturapdf= async ( req:Request,res:Response) => {
        this.getRecibo = function (folio, orden, entrada, sociedad, entradaPedido) {
            return __awaiter(this, void 0, void 0, function* () {
                let factura = '';
                let recibo = {
                    "status": "",
                    "recibo": ""
                };
                if (entradaPedido['Zserie'] == '' && entradaPedido['Zfolio'] == '') {
                    factura = entradaPedido['Zuuidxml'];
                }
                else {
                    factura = entradaPedido['Zserie'] + entradaPedido['Zfolio'];
                }
                return new Promise((resolve) => {
                    const ubicacionPlantilla = require.resolve("./plantilla.html");
                    let fecha;
                    let today = new Date();
                    // Fecha
                    let mm = ("0" + (today.getMonth() + 1)).slice(-2);
                    let dd = today.getDate();
                    let yy = today.getFullYear();
                    //Hora
                    let hora = today.toLocaleString('es-MX', { timeZone: 'America/Mexico_City', hour12: false });
                    let hora1 = hora.split(' ')[1];
                    fecha = yy + '-' + mm + '-' + dd + ' ' + hora1;
                    //fecha = today.toISOString().split('.')[0]
                    //fecha = fecha.replace('T', ' ');
                    // logo = process.env.LOGO_RECIBO + sociedad + process.env.LOGO_RECIBO_EXTENSION;        
                    let contenidoHtml = fs.readFileSync(ubicacionPlantilla, 'utf8');
                    // contenidoHtml = contenidoHtml.replace("{{logo}}", logo);
                    contenidoHtml = contenidoHtml.replace("{{folio}}", folio);
                    contenidoHtml = contenidoHtml.replace("{{fecha}}", fecha);
                    contenidoHtml = contenidoHtml.replace("{{orden}}", orden);
                    contenidoHtml = contenidoHtml.replace("{{entrada}}", entrada);
                    contenidoHtml = contenidoHtml.replace("{{factura}}", factura);
                    pdf.create(contenidoHtml).toBuffer(function (err, buffer) {
                        if (err) {
                            recibo.recibo = err.message;
                            resolve(recibo);
                        }
                        else {
                            recibo.status = 'OK';
                            recibo.recibo = Buffer.from(buffer).toString("base64");
                            resolve(recibo);
                        }
                    });
                });
            });
        };
        this.save = function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('hi');
            });
        };
        // }
    }
}
exports.facturapdf = facturapdf;
exports.default = new facturapdf();
