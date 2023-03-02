"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factura = exports.producto_servicio = exports.inventario_general = exports.movimientos = exports.devoluciones = exports.ordencompradetalle = exports.ordencompra = exports.auditoria = exports.ubicacion = exports.regimenf = exports.claveusof = exports.pedidodetalle = exports.pedido = exports.b_p = exports.Usuario = exports.estado = exports.Paise = exports.Municipio = void 0;
exports.Municipio = require('./municipio');
exports.Paise = require('./pais');
exports.estado = require('./estado');
exports.Usuario = require('./usuario');
exports.b_p = require('./b_p');
exports.pedido = require('./pedido');
exports.pedidodetalle = require('./pedidodetalle');
exports.claveusof = require('./clave usof');
exports.regimenf = require('./regimen fiscal');
exports.ubicacion = require('./ubicacion');
exports.auditoria = require('./auditoria');
exports.ordencompra = require('./ordencompra');
exports.ordencompradetalle = require('./ordencompradetalle');
exports.devoluciones = require('./devoluciones');
exports.movimientos = require('./movimientos_inv');
exports.inventario_general = require('./inventario_general');
exports.producto_servicio = require('./productos_servicios');
exports.factura = require('./factura');
module.exports = {
    // Categoria,
    Municipio: exports.Municipio,
    Paise: exports.Paise,
    Usuario: exports.Usuario,
    b_p: exports.b_p,
    pedido: exports.pedido,
    pedidodetalle: exports.pedidodetalle,
    estado: exports.estado,
    claveusof: exports.claveusof,
    regimenf: exports.regimenf,
    ubicacion: exports.ubicacion,
    auditoria: exports.auditoria,
    ordencompra: exports.ordencompra,
    ordencompradetalle: exports.ordencompradetalle,
    devoluciones: exports.devoluciones,
    movimientos: exports.movimientos,
    inventario_general: exports.inventario_general,
    producto_servicio: exports.producto_servicio,
    factura: exports.factura
};
