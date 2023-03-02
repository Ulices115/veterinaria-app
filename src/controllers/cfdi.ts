import {Request,Response} from 'express';
import { CFDI,
    Comprobante,
    Concepts, 
    Emisor,
    Impuestos,
    Receptor,
    Relacionado, 
    XmlIeduAttribute,Iedu}  from '@signati/core';
import moment from 'moment-timezone';
import { b_p, pedido,factura } from '../models/index';
import fs from 'fs';
const pdf = require("html-pdf");
var QRCode = require('qrcode')

const convert = require('xml-js');
const Configuracion = require("../models/configuracion");
const Pedidodetalle = require("../models/pedidodetalle");
export class Controller{   
     async cfdi(req:Request,res:Response) {
 try { 
  var referencia;
  var descripcion;
  var cantidad;
  var precio;
  var importe;
  var SubTotal:number=0;
  var total=0;
  var descuento;
  var descuentotal=0;
  var clave_prod_serv;
  var clave_unidad;
  var unidad;
  var objeto_imp;
  var impuesto_material;
  var tipo_factor;
  var tasa_cuota;
  var rfc='';
  var nombre='';
  var usocfdi;
  var regimen;
  var cpostal='';
  var id_cliente;
  var iva=0;
  const { id } = req.params;
  const pedidod =   await Pedidodetalle.aggregate([
    { "$lookup": {
      from: "productos_servicios",
      foreignField: "descripcion",
      localField: "descripcion",
      as: "producto_servicio"
    }},
    { $unwind: "$producto_servicio"},
    { $match: {'id_pedido':id}}]);
  // para generar el subtotal-total
    for(const ped in pedidod){
      importe=pedidod[ped]['subtotal']
      iva+=(pedidod[ped]['subtotal']*.16)
      descuentotal+=pedidod[ped]['descuento']
      SubTotal+= Number(importe) 
      total=SubTotal- descuentotal + iva
      
    }
    
    const configuracion = await Configuracion.find()
    let base64cer = configuracion[0]['certificado'];
    let base64file_cer = base64cer.split(';base64,').pop();
    fs.writeFile('./src/CSD_emisor/certificado.cer', base64file_cer!, {encoding: 'base64'}, function(err) {
    console.log('.cer creado');
  });
    let base64key = configuracion[0]['key'];
    let base64file_key = base64key.split(';base64,').pop();
    fs.writeFile('./src/CSD_emisor/key.key', base64file_key!, {encoding: 'base64'}, function(err) {
    console.log('.key creado');
  }); 

    var rfc_e=configuracion[0]['rfc']
    var nombre_e=configuracion[0]['razon_social']
    var regimen_f=configuracion[0]['regimen_f']
    var lugar_exp=configuracion[0]['lugar_exp']
    var moneda =configuracion[0]['moneda']
    var exportacion= configuracion[0]['exportacion']
    var serie=configuracion[0]['serie']
    var tipo_comprobante=configuracion[0]['tipo_comprobante']

    const key = './src/CSD_emisor/key.key';
    const cer = `./src/CSD_emisor/certificado.cer`;
    const styleSheet = './src/CSD_emisor/cadenaoriginal_4_0.xslt';
    var fecha = new Date().toString();
    var date = moment(fecha).format('YYYY-MM-DDThh:mm:ss')
    // const fecha =moment.tz('America/Mexico_City').format('YYYY-MM-DDThh:mm:ss'); 

    const facturas = await factura.find().count();
    var folio =1000000000 +  (facturas + 1)
     // consultar b_p del pedido
     const ped= await pedido.find({"id_pedido":id});
     for(const obj in ped){
       rfc= ped[obj]['rfc']
       id_cliente=ped[obj]['id_b_p']
     }
     const clientes = await b_p.aggregate([
       { "$lookup": {
         from: "regimen fiscals",
         foreignField: "descripcion",
         localField: "regimen_fiscal",
         as: "regimen"
       }},
       { $unwind: "$regimen"},
       { $match: {'id_b_p':id_cliente}},
       { "$lookup": {
         from: "clave uso fiscals",
         foreignField: "descripcion",
         localField: "clave_usof",
         as: "clavef"
       }},
       { $unwind: "$clavef"},]);
      for(const cliente in clientes){
       nombre=clientes[cliente]['nombre'];
       usocfdi=clientes[cliente]['clavef']['id_cfdi'];
       regimen=clientes[cliente]['regimen']['id_r'];
       cpostal= clientes[cliente]['codigoP'];
       var metodo_pago= clientes[cliente]['metodo_pago'];
       var condicion_pago= clientes[cliente]['condicion_pago'];
       var forma_pago= clientes[cliente]['forma_pago'];
     }  
    const comprobanteAttribute: Comprobante = { 
    Serie: serie,
    Folio: `${String(folio).slice(1)}`,
    Fecha: date,
    Sello: '',
    FormaPago: forma_pago,
    NoCertificado: '',
    Certificado: '',
    condicionesDePago: condicion_pago,
    SubTotal: `${SubTotal}`,
    Descuento: `${descuentotal.toFixed(2)}`,
    Moneda: `${moneda}`,
    Total:`${total}` ,
    TipoDeComprobante: tipo_comprobante,
    MetodoPago: metodo_pago,
    LugarExpedicion:`${lugar_exp}`,
    Exportacion: `${exportacion}`
    };
    
    const cfdi = new CFDI(comprobanteAttribute, {
     xslt: styleSheet,
     debug: false
    });
    await cfdi.setAttributesXml({version: '1.0', encoding: 'utf-8'});
    // UUID
    // const relation = new Relacionado({ TipoRelacion: '01' });
    // relation.addRelation('4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A');
    // await cfdi.relacionados(relation);

    const emisor = new Emisor({
                    Rfc: rfc_e,
                    Nombre: nombre_e,
                    RegimenFiscal: regimen_f
                });
    await cfdi.emisor(emisor);
   
    const receptor = new Receptor({
        Rfc: rfc,
        Nombre: nombre,
        UsoCFDI: usocfdi,
        DomicilioFiscalReceptor: cpostal,
        RegimenFiscalReceptor: regimen
    });
    await cfdi.receptor(receptor);
    // inicio del for para generar los conceptos del servicio
    for(const ped in pedidod){
      descripcion=pedidod[ped]['descripcion']
      cantidad=pedidod[ped]['cantidad']
      precio=pedidod[ped]['precio']
      importe=pedidod[ped]['subtotal']
      descuento=pedidod[ped]['descuento']
      referencia=pedidod[ped]['referencia'];
      clave_prod_serv=pedidod[ped]['producto_servicio']['clave_prod_serv']  
      clave_unidad=pedidod[ped]['producto_servicio']['clave_unidad'] 
      unidad=pedidod[ped]['producto_servicio']['unidad']   
      objeto_imp=pedidod[ped]['producto_servicio']['objeto_imp']   
      impuesto_material=pedidod[ped]['producto_servicio']['impuesto']   
      tipo_factor=pedidod[ped]['producto_servicio']['tipo_factor']   
      tasa_cuota=pedidod[ped]['producto_servicio']['tasa_cuota']   
        const concepto = new Concepts({
          ClaveProdServ: clave_prod_serv, 
          NoIdentificacion: referencia,
          Cantidad: cantidad,
          ClaveUnidad: clave_unidad,
          Unidad: unidad,
          Descripcion: descripcion,
          ValorUnitario: precio,
          Importe: importe.toFixed(2),
          Descuento: descuento.toFixed(2),
          ObjetoImp: objeto_imp
      });
   concepto.traslado({
         Base: importe,
         Impuesto: impuesto_material,
         TipoFactor: tipo_factor,
         TasaOCuota: tasa_cuota,
         Importe: ((importe*.16).toFixed(2)).toString(),
   });
  //  concepto.retencion({
  //        Base: '',
  //        Impuesto: '',
  //        TipoFactor: '',
  //        TasaOCuota: '',
  //        Importe: '',
  //  });
  //  complemento de concepto opcional
  //  const ieduObject: XmlIeduAttribute = {
  //      version: '1.0',
  //      autRVOE: '201587PRIM',
  //      CURP: 'EJEMPLOGH101004HQRRRN',
  //      nivelEducativo: 'Primaria',
  //      nombreAlumno: 'ejemplo garcia correa',
  //      rfcPago: 'XAXX010101000',
  //    };
  //    const iedu = new Iedu(ieduObject);
  //    concepto.complemento(iedu);
     await cfdi.concepto(concepto);
    }
    // fin del for
    const impuesto: Impuestos = new Impuestos({ TotalImpuestosTrasladados:iva.toFixed(2).toString()});
    impuesto.traslados({
      Base: SubTotal,
      Impuesto: impuesto_material,
      TipoFactor: tipo_factor,
      TasaOCuota: tasa_cuota,
      Importe: iva.toFixed(2).toString(),
    });
    // impuesto.retenciones({
    //   Impuesto: '002',
    //   Importe: '59.17',
    // });
    await cfdi.impuesto(impuesto)
    await cfdi.certificar(cer);
    await cfdi.sellar(key, '12345678a');
    const xml = await cfdi.getXmlCdfi();
    res.set('Content-Type','text/xml')
    // res.send(xml)
    //  res.send(await cfdi.getJsonCdfi());
    console.log('Cfdi 4.0 generado');
    
    var soap = require('soap');
    var usuario = 'DEMO';
    var password = '123456';
    var url = 'https://wstimbradopruebas.facturaxion.com/WSTimbrado.svc?singleWsdl';
    var args = {$xml: '<parametrosEntradaWSTimbrado xmlns:wcf="http://schemas.datacontract.org/2004/07/WCFWSTimbrado">'
    +`<wcf:Contrasenia>${password}</wcf:Contrasenia>`
    +`<wcf:Usuario>${usuario}</wcf:Usuario>`
    +'<wcf:XMLPreCFDI>'
    +'<![CDATA['
    +`${xml.slice(38)}`
    +']]>'
    +'</wcf:XMLPreCFDI>'
    +'</parametrosEntradaWSTimbrado>'
    };
    soap.createClient(url, function(err:any, client:any) {
            client.WSTimbrado.BasicHttpsBinding_IWSTimbrado.TimbrarObjeto(args, function(err:any, result:any) {
                if(err){
                  console.log('Ocurrio un error:', err);
                  
                }else{
                  if(result.TimbrarObjetoResult.MensajeValidacion==''){
                    var xmltimbrado=result.TimbrarObjetoResult.XMLTimbrado
                    var result = convert.xml2json(xmltimbrado, {compact: true, spaces: 4});
                    var factura = {
                      xml:xmltimbrado,
                      pdf: ''
                    }
                    generarpdf(result).then((value:any) =>{
                      factura.pdf=value

                      res.send(factura)
                      console.log('CFDI timbrado correctamente');
                    }); 
                  
                  }else{
                    console.log('Validacion:',result.TimbrarObjetoResult.MensajeValidacion);
                    return res.status(401).json({
                      msg: `${result.TimbrarObjetoResult.MensajeValidacion} `
                  })
                  }  
                }
                
            });
      });
      
     }
     catch (e) {
     
        console.log('el error fue',e);
      
     }
     const generarpdf = async(xml:any)=>{

      let factura = '';
     
      let xmlobjeto=JSON.parse(xml)  
      const data=xmlobjeto["cfdi:Comprobante"]['cfdi:Conceptos']['cfdi:Concepto']
      let UUID=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['UUID']
      let rfc_prov=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['RfcProvCertif']
      let Nocertificadosat=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['NoCertificadoSAT']
      let fechatimbrado=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['FechaTimbrado']
      let sellosat=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['SelloSAT']
      let sellocfd=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['SelloCFD']
      let version=xmlobjeto["cfdi:Comprobante"]['cfdi:Complemento']['tfd:TimbreFiscalDigital']['_attributes']['Version']
      let qrdatos=`https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=${UUID}&re=${rfc_e}&rr=${rfc}&tt=1091.8&fe=1Rcp6w==`
      let qr= await QRCode.toDataURL(qrdatos)
      return new Promise((resolve)=>{  
        
       var options=[]
       for(const valor in data){
          options.push(data[valor]['_attributes'])
       }
        const tableRows = options?.map((row:any) => `<tr><td>${row['NoIdentificacion']}</td><td>${row['ClaveUnidad']}</td><td>${row['Descripcion']}</td><td align="right">${row['ValorUnitario']}</td><td align="right">${row['Cantidad']}</td>
        <td align="right">$ ${row['Importe']}</td><td align="right">$ ${row['Descuento']}</td></tr>`).join('');
        const table = `

        <!DOCTYPE html>
        <html lang="es">
        
        <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
            integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Factura</title>
      <style>
            .colauto{ 
             width: auto;
             margin-left: -8px;
             }
            .colmargen{
             margin-left: 8px;
            }
            .logo{
              width: 120px;
              height: 80px;
            }

  
     </style>
        </head>      
        <body>
            <div class="container-fluid">
                <div class="row" style="margin-block-end: -20px;">
                    <div class="col-xs-10 ">
                        <h1>Factura</h1>
                    </div>
                    <div class="col-xs-2">
                        <img class="img img-responsive logo"  src="http://animalvet.com.ec/wp-content/uploads/2019/08/Logo-Animal-Vet-2.jpg"   alt="Logotipo">
                    </div>
                </div>
                <hr>
                <div class="row ">
                    <div class="col-xs-9 ">
                    <strong>Remitente</strong>
                        <br>
                        <h1 class="h6">${nombre_e}</h1>
                        <h1 class="h6">RFC:<b>${rfc_e}</b></h1>
                        <h1 class="h6">Lugar de expedición:<b>${lugar_exp}</b></h1>                  
                    </div>
                    <div class="col-xs-3 ">
                        <strong>Fecha de emisión</strong>
                        <br>
                        ${new Date().toLocaleDateString('es-mx', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) } <br>
                        <strong>Factura No.</strong>
                        <br>
                        ${String(folio).slice(1)}
                    </div>
                </div>
                <hr>
                <div class="row" style="margin-bottom: 2rem;">
                    <div class="col-xs-6">
                    <strong>Cliente</strong>
                    <br>
                    <h1 class="h6">${nombre}</h1>
                    <h1 class="h6">RFC:<b>${rfc}</b></h1>
                    <h1 class="h6">Domicilio fiscal:<b>${cpostal}</b></h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                    <table class="table table-condensed table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Clave unidad</th>
                            <th>Descripción</th>
                            <th>Valor unitario</th>
                            <th>Cantidad</th>
                            <th>Importe</th>
                            <th>Descuento</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6" class="text-right"><b>Subtotal</b></td>
                            <td align="right">$ ${SubTotal}</td>
                        </tr>
                        <tr>
                            <td colspan="6" class="text-right"><b>Descuento</b></td>
                            <td align="right">$ ${descuentotal}</td>
                        </tr>
        
                        <tr>
                            <td colspan="6" class="text-right"><b>Impuestos</b></td>
                            <td align="right">$ ${iva}</td>
                        </tr>
                        <tr>
                            <td class="success" colspan="6" class="text-right">
                                <h4><b>Total</b></h4>
                            </td>
                            <td>
                                <h4 align="right">MXN ${total}</h4>
                            </td>
                        </tr>
                    </tfoot>
                </table>
        
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 text-center">
                        <p class="h5">Gracias por su compra</p>
                    </div>
                  <br>  
                </div>
                <hr>
              <div class="row">
                <div class="col-xs-3 colmargen">
                    <h1 class="h6"  style="line-height: 0px"><b>Número de certificado SAT</b></h1> 
                    <h1 class="h6"> <small>${Nocertificadosat}</small></h1>
                </div>
                <div class="col-xs-3 colauto">
                    <h1 class="h6"  style="line-height: 0px"><b>Folio fiscal</b></h1>
                    <h1 class="h6"><small>${UUID}</small></h1> 
                   </div>
                   <div class="col-xs-3 colauto">
                       <h1 class="h6" style="line-height: 0px"><b>Fecha de timbrado</b></h1>
                       <h1 class="h6"><small>${fechatimbrado}</small></h1> 
                   </div>
                   <div class="col-xs-3">
                       <h1 class="h6" style="line-height: 0px"><b>Rfc proveedor fiscal</b></h1>
                       <h1 class="h6"><small>${rfc_prov}</small> </h1> 
                   </div>
              </div>
            <div class="row">
             <div class="col-xs-3">
                <img src="${qr}"/>
                <br>
             </div>
             <div class="col-xs-9">
                <h1 class="h6" style="line-height: 20%"><b>Sello digital del SAT</b></h1> 
                <h6 style="font-size: 6pt;"><small>
                ${sellosat.slice(0,-184)}
                ${sellosat.slice(160,-24)}
                ${sellosat.slice(320)}
                    
                </small></h6>
                <h1 class="h6" style="line-height: 20%"><b>Sello digital del CFDI</b></h1> 
                <h6 style="font-size: 6pt;" ><small>
                 ${sellocfd.slice(0,-184)}
                 ${sellocfd.slice(160,-24)}
                 ${sellocfd.slice(320)}
                </small></h6>
                <h1 class="h6" style="line-height: 20%"><b>Cadena original del timbre</b></h1> 
                <h6 style="font-size: 6pt;" ><small>  
                ${`||${version}|${UUID}|${fechatimbrado}|${rfc}|${sellocfd}|${Nocertificadosat}||`.slice(0,-283)}
                ${`||${version}|${UUID}|${fechatimbrado}|${rfc}|${sellocfd}|${Nocertificadosat}||`.slice(160,-123)}
                ${`||${version}|${UUID}|${fechatimbrado}|${rfc}|${sellocfd}|${Nocertificadosat}||`.slice(320)}
                </small></h6>
            
            </div>
            </div>
            <div class="row">
            <div class="col-xs-12 text-right">
                <p class="h6"><small>Este documento es una representación impresa de un CFDI versión 4.0</small></p> 
            </div>
          <br>  
        </div>
        </body>
        
        </html>
        `; 
        
          pdf.create(table).toBuffer(function(err:any, buffer:any){
              if(err){
                  console.log('error',err);
                  
              }else{
                 
                  factura= Buffer.from(buffer).toString("base64");
                  resolve(factura);
                  
              }            
          });
          
          
      })
   }
   
    }   
   
}


export default new Controller();