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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const core_1 = require("@signati/core");
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const index_1 = require("../models/index");
const Pedidodetalle = require("../models/pedidodetalle");
class Controller {
    cfdi(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var descripcion;
                var cantidad;
                var precio;
                var importe;
                var SubTotal = 0;
                var total;
                var rfc;
                var nombre;
                var usocfdi;
                var regimen;
                var cpostal;
                var id_cliente;
                const { id } = req.params;
                const pedidod = yield Pedidodetalle.find({ "id_pedido": id });
                // para generar el subtotal-total
                for (const ped in pedidod) {
                    importe = pedidod[ped]['importe'];
                    SubTotal += Number(importe);
                    total = SubTotal;
                }
                // Creacion del cfdi 
                const key = './src/CSD_FUNK671228PH6_20190528174303/CSD_KARLA_FUENTE_NOLASCO_FUNK671228PH6_20190528_174243.key';
                const cer = './src/CSD_FUNK671228PH6_20190528174303/CSD_KARLA_FUENTE_NOLASCO_FUNK671228PH6_20190528_174243s.cer';
                const styleSheet = './src/CSD_FUNK671228PH6_20190528174303/cadena_original.xslt';
                var fecha = new Date().toString();
                var data = (0, moment_timezone_1.default)(fecha).format('YYYY-MM-DDThh:mm:ss');
                // const fecha =moment.tz('America/Mexico_City').format('YYYY-MM-DDThh:mm:ss'); 
                const comprobanteAttribute = {
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
                    Total: `${total}`,
                    TipoDeComprobante: 'I',
                    MetodoPago: 'PUE',
                    LugarExpedicion: '10740',
                    Exportacion: '01'
                };
                const cfdi = new core_1.CFDI(comprobanteAttribute, {
                    xslt: styleSheet,
                    debug: false
                });
                yield cfdi.setAttributesXml({ version: '1.0', encoding: 'utf-8' });
                // UUID
                const relation = new core_1.Relacionado({ TipoRelacion: '01' });
                relation.addRelation('4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A');
                yield cfdi.relacionados(relation);
                const emisor = new core_1.Emisor({
                    Rfc: 'FUNK671228PH6',
                    Nombre: '	KARLA FUENTE NOLASCO',
                    RegimenFiscal: 612
                });
                yield cfdi.emisor(emisor);
                // consultar b_p del pedido
                const ped = yield index_1.pedido.find({ "id_pedido": id });
                for (const obj in ped) {
                    rfc = ped[obj]['rfc'];
                    id_cliente = ped[obj]['id_b_p'];
                }
                const clientes = yield index_1.b_p.aggregate([
                    { "$lookup": {
                            from: "regimen fiscals",
                            foreignField: "descripcion",
                            localField: "regimen_fiscal",
                            as: "regimen"
                        } },
                    { $unwind: "$regimen" },
                    { $match: { 'id_b_p': id_cliente } },
                    { "$lookup": {
                            from: "clave uso fiscals",
                            foreignField: "descripcion",
                            localField: "clave_usof",
                            as: "clavef"
                        } },
                    { $unwind: "$clavef" },
                ]);
                for (const cliente in clientes) {
                    nombre = clientes[cliente]['nombre'];
                    usocfdi = clientes[cliente]['clavef']['id_cfdi'];
                    regimen = clientes[cliente]['regimen']['id_r'];
                    cpostal = clientes[cliente]['codigoP'];
                }
                const receptor = new core_1.Receptor({
                    Rfc: rfc,
                    Nombre: nombre,
                    UsoCFDI: usocfdi,
                    DomicilioFiscalReceptor: cpostal,
                    RegimenFiscalReceptor: regimen
                });
                yield cfdi.receptor(receptor);
                // inicio del for para generar los conceptos del servicio
                for (const ped in pedidod) {
                    descripcion = pedidod[ped]['descripcion'];
                    cantidad = pedidod[ped]['cantidad'];
                    precio = pedidod[ped]['precio'];
                    importe = pedidod[ped]['importe'];
                    const concepto = new core_1.Concepts({
                        ClaveProdServ: '70122000',
                        NoIdentificacion: '1',
                        Cantidad: cantidad,
                        ClaveUnidad: '1',
                        Unidad: '1',
                        Descripcion: descripcion,
                        ValorUnitario: precio,
                        Importe: importe,
                        Descuento: '0',
                        ObjetoImp: '01'
                    });
                    concepto.traslado({
                        Base: '',
                        Impuesto: '',
                        TipoFactor: '',
                        TasaOCuota: '',
                        Importe: '',
                    });
                    concepto.retencion({
                        Base: '',
                        Impuesto: '',
                        TipoFactor: '',
                        TasaOCuota: '',
                        Importe: '',
                    });
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
                    yield cfdi.concepto(concepto);
                }
                // fin del for
                const impuesto = new core_1.Impuestos({ TotalImpuestosRetenidos: '1000' });
                impuesto.traslados({
                    Base: 1,
                    Impuesto: '002',
                    TipoFactor: 'Tasa',
                    TasaOCuota: '0.16',
                    Importe: '59.17',
                });
                impuesto.retenciones({
                    Impuesto: '002',
                    Importe: '59.17',
                });
                yield cfdi.impuesto(impuesto);
                yield cfdi.certificar(cer);
                yield cfdi.sellar(key, '12345678a');
                const xml = yield cfdi.getXmlCdfi();
                res.set('Content-Type', 'text/xml');
                res.send(xml);
                //  res.send(await cfdi.getJsonCdfi());
                console.log('Cfdi 4.0 generado');
            }
            catch (e) {
                console.log('el error fue', e);
            }
        });
    }
}
exports.Controller = Controller;
exports.default = new Controller();
