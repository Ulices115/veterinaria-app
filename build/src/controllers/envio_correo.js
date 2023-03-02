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
exports.correo = void 0;
const nodemailer = require("nodemailer");
const Configuracion = require("../models/configuracion");
class correo {
    constructor() {
        this.crearcorreo = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('id', req.body.id);
            let id = req.body.id;
            let correo = req.body.correo;
            let xml = req.body.xml;
            let pdf = req.body.pdf;
            const configuracion = yield Configuracion.find();
            let correo_emisor = configuracion[0]['correo'];
            let password = configuracion[0]['password'];
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: `${correo_emisor}`,
                    pass: `${password}`
                }
            });
            const mailOptions = {
                from: `DESTINATARIO`,
                to: `${correo}`,
                // to: `brallanavila115@gmail.com`,
                subject: "Factura de pedido",
                text: "Buen dia estimado cliente, le hacemos llegar su factura electronica correspondiente al pedido que usted realizó. Gracias por su combra",
                attachments: [
                    {
                        filename: `CFDI4.0 ${id}.xml`,
                        content: `${xml}`
                    },
                    {
                        filename: `Factura ${id}.pdf`,
                        content: `${pdf}`,
                        encoding: 'base64'
                    },
                ]
            };
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                }
                else {
                    console.log('Correo se envió con éxito: ' + info.response);
                    res.status(200).json({ msg: 'Correo enviado correctamente' });
                }
            });
        });
    }
}
exports.correo = correo;
exports.default = new correo();
