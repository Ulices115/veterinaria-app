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
exports.Server = void 0;
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');
const path = require("path");
const mime = require('mime');
class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/usuarios',
            b_p: '/api/b_p',
            pedido: '/api/pedido',
            pedidodetalle: '/api/pedidodetalle',
            cfdi: '/api/cfdi',
            pais: '/api/pais',
            estado: '/api/estado',
            regimen: '/api/regimen',
            clave: '/api/clave',
            municipio: '/api/municipio',
            localidad: '/api/localidad',
            codigop: '/api/codigop',
            colonia: '/api/colonia',
            factura: '/api/factura',
            ubicacion: '/api/ubicacion',
            auditoria: '/api/auditoria',
            orden: '/api/orden',
            ordendetalle: '/api/ordencompradetalle',
            devolucion: '/api/devoluciones',
            ventas: '/api/ventas',
            movimientos: '/api/movimientos',
            inventario_general: '/api/inventario_general',
            producto_servicio: '/api/producto_servicio',
            transaccion: '/api/transaccion',
            utransaccion: '/api/Utransaccion',
            configuracion: '/api/configuracion',
            correo: '/api/correo'
        };
        //Cnectar a base de datos
        this.conectaDB();
        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    }
    conectaDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield dbConection();
        });
    }
    middlewares() {
        // Uso de cors para comunicar el backend con el front
        this.app.use(cors());
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ limit: '50mb' }));
        // Parseo y lectura del body
        this.app.use(express.json());
        //Ruta estatica
        // this.app.use(express.static('public'));
        this.app.use('/', express.static(path.join('src/public')));
        // this.app.use('/',(req:any,res:any)=>{
        //     res.sendFile(path.resolve('src/public/index.html'))
        // })
    }
    routes() {
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.b_p, require('../routes/b_p'));
        this.app.use(this.paths.pedido, require('../routes/pedido'));
        this.app.use(this.paths.pedidodetalle, require('../routes/pedidodetalle'));
        this.app.use(this.paths.cfdi, require('../routes/cfdi'));
        this.app.use(this.paths.pais, require('../routes/pais'));
        this.app.use(this.paths.estado, require('../routes/estado'));
        this.app.use(this.paths.regimen, require('../routes/regimen fiscal'));
        this.app.use(this.paths.clave, require('../routes/clave usof'));
        this.app.use(this.paths.municipio, require('../routes/municipio'));
        this.app.use(this.paths.localidad, require('../routes/localidad'));
        this.app.use(this.paths.codigop, require('../routes/codigop'));
        this.app.use(this.paths.colonia, require('../routes/colonia'));
        this.app.use(this.paths.factura, require('../routes/factura'));
        this.app.use(this.paths.ubicacion, require('../routes/ubicacion'));
        this.app.use(this.paths.auditoria, require('../routes/auditoria'));
        this.app.use(this.paths.orden, require('../routes/ordencompra'));
        this.app.use(this.paths.ordendetalle, require('../routes/ordencompradetalle'));
        this.app.use(this.paths.devolucion, require('../routes/devoluciones'));
        this.app.use(this.paths.ventas, require('../routes/ventas'));
        this.app.use(this.paths.movimientos, require('../routes/movimiento_inv'));
        this.app.use(this.paths.inventario_general, require('../routes/inventario_general'));
        this.app.use(this.paths.producto_servicio, require('../routes/productos_servicios'));
        this.app.use(this.paths.transaccion, require('../routes/transacciones'));
        this.app.use(this.paths.utransaccion, require('../routes/usuario_transaccion'));
        this.app.use(this.paths.configuracion, require('../routes/configuracion'));
        this.app.use(this.paths.correo, require('../routes/envio_correo'));
        this.app.get('*', (req, res) => {
            res.sendFile(path.resolve('src/public/index.html'));
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Proceso corriendo en puerto', this.port);
        });
    }
}
exports.Server = Server;
module.exports = Server;
