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
import { b_p, pedido,regimenf,claveusof } from '../models/index';
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
  var total;
  var rfc;
  var nombre;
  var usocfdi;
  var regimen;
  var cpostal;
  var id_cliente;
  var iva=0;
  const { id } = req.params;
  const pedidod = await Pedidodetalle.find({"id_pedido":id});
  // para generar el subtotal-total
      for(const ped in pedidod){
        importe=pedidod[ped]['importe']
        iva+=(pedidod[ped]['importe']*.16)
        SubTotal+= Number(importe) 
        total=SubTotal + iva
      }
    // Creacion del cfdi 
    const key = './src/CSD_FUNK671228PH6_20190528174303/CSD_KARLA_FUENTE_NOLASCO_FUNK671228PH6_20190528_174243.key';
    const cer = './src/CSD_FUNK671228PH6_20190528174303/CSD_KARLA_FUENTE_NOLASCO_FUNK671228PH6_20190528_174243s.cer';
    const styleSheet = './src/CSD_FUNK671228PH6_20190528174303/cadenaoriginal_4_0.xslt';
    var fecha = new Date().toString();
    var data = moment(fecha).format('YYYY-MM-DDThh:mm:ss')
    // const fecha =moment.tz('America/Mexico_City').format('YYYY-MM-DDThh:mm:ss'); 
    const comprobanteAttribute: Comprobante = { 
    Serie: 'E',
    Folio: 'ACACUN-27',
    Fecha: data,
    Sello: '',
    FormaPago: '01',
    NoCertificado: '',
    Certificado: '',
    condicionesDePago: 'Contado',
    SubTotal: `${SubTotal}`,
    Descuento: '0',
    Moneda: 'MXN',
    Total:`${total}` ,
    TipoDeComprobante: 'I',
    MetodoPago: 'PUE',
    LugarExpedicion: '10740',
    Exportacion: '01'
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
                    Rfc: 'FUNK671228PH6',
                    Nombre: '	KARLA FUENTE NOLASCO',
                    RegimenFiscal: 612
                });
    await cfdi.emisor(emisor);
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
    }  
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
      importe=pedidod[ped]['importe']
      referencia=pedidod[ped]['referencia'];
        
        const concepto = new Concepts({
          ClaveProdServ: '70122000', 
          NoIdentificacion: referencia,
          Cantidad: cantidad,
          ClaveUnidad: 'E48',
          Unidad: 'SV',
          Descripcion: descripcion,
          ValorUnitario: precio,
          Importe: importe,
          Descuento: '0',
          ObjetoImp: '01'
      });
   concepto.traslado({
         Base: importe,
         Impuesto: '002',
         TipoFactor: 'tasa',
         TasaOCuota: '0.16',
         Importe: (importe*.16).toString(),
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
    const impuesto: Impuestos = new Impuestos({ TotalImpuestosTrasladados:iva.toString()});
    impuesto.traslados({
      Base: SubTotal,
      Impuesto: '002',
      TipoFactor: 'Tasa',
      TasaOCuota: '0.16',
      Importe: iva.toString(),
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
     res.send(xml)
    //  res.send(await cfdi.getJsonCdfi());
    console.log('Cfdi 4.0 generado');
    
    // let codificado= btoa(xml)
    // console.log(codificado);
    
    // let decodificado = atob(codificado);
    // console.log(decodificado);

    // var soap = require('soap');
    // var url = 'http://www.gcomputer.net/webservices/dilbert.asmx?wsdl';
    // soap.createClient(url, function(_err:any, client:any) {
    //     client.DailyDilbert({ ADate: "2019-11-02" }, function(err:any, result:any) {
    //         if(err) return console.log(err);
    //         console.log(result.DailyDilbertResult);
    //     });
    // });
     }
     catch (e) {
     
        console.log('el error fue',e);
      
     }
   
    }   

}


export default new Controller();