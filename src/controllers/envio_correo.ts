import { Response,Request} from "express"
const nodemailer = require("nodemailer");
const Configuracion = require("../models/configuracion");

export class correo{
    crearcorreo = async ( req:any,res:Response) => {
        console.log('id',req.body.id);
            let id=req.body.id
            let correo=req.body.correo
            let xml =req.body.xml
            let pdf=req.body.pdf

            const configuracion = await Configuracion.find()
            let correo_emisor= configuracion[0]['correo']
            let password =configuracion[0]['password']
     
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure:true,
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
            text:"Buen dia estimado cliente, le hacemos llegar su factura electronica correspondiente al pedido que usted realizó. Gracias por su combra",
            attachments: [
                {   // utf-8 string as an attachment
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
          

          transporter.sendMail(mailOptions, (error:any, info:any) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Correo se envió con éxito: ' + info.response);
                res.status(200).json({  msg:'Correo enviado correctamente'});
            }
        });
     
    }
                 
    }    

export default new correo();