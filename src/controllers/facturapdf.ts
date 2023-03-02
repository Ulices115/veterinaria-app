const pdf = require("html-pdf");
const fs = require("fs");
const fetch = require("node-fetch");
const FormData = require("form-data");

import { Response,Request} from "express"
export class facturapdf{
    // facturapdf= async ( req:Request,res:Response) => {
    
    getRecibo = async function (folio:any,orden:any,entrada:any,sociedad:any,entradaPedido:any){
            let factura = '';
            let recibo = {
                "status": "",        
                "recibo": ""    
            };
        
            if (entradaPedido['Zserie'] == '' && entradaPedido['Zfolio'] == '' ){
                factura = entradaPedido['Zuuidxml'];
            }else{
                factura = entradaPedido['Zserie'] + entradaPedido['Zfolio'];
            }
        
            return new Promise((resolve)=>{       
                const ubicacionPlantilla = require.resolve("./plantilla.html");
                
                let fecha;
                let today = new Date();
        
        
                // Fecha
                let mm = ("0" + (today.getMonth() + 1)).slice(-2)
                let dd = today.getDate();
                let yy = today.getFullYear();
        
                //Hora
                let hora  = today.toLocaleString('es-MX',{timeZone: 'America/Mexico_City',hour12: false});
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
                
                pdf.create(contenidoHtml).toBuffer(function(err:any, buffer:any){
                    if(err){
                        recibo.recibo = err.message;
                        resolve(recibo);
                    }else{
                        recibo.status = 'OK';
                        recibo.recibo = Buffer.from(buffer).toString("base64");
                        resolve(recibo);
                    }            
                });
            })
        }
        save=async function (){
            console.log('hi');
            
        }   
    // }
    
  
}
export default new facturapdf();
