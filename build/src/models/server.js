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
            servicio: '/api/servicio',
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
            inventario: '/api/inventario',
            producto: '/api/producto',
            factura: '/api/factura',
            ubicacion: '/api/ubicacion',
            auditoria: '/api/auditoria',
            orden: '/api/orden',
            ordendetalle: '/api/ordencompradetalle',
            inventario_servicios: '/api/inventarioservicios',
            devolucion: '/api/devoluciones',
            ventas: '/api/ventas'
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
        this.app.use(this.paths.servicio, require('../routes/servicio'));
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
        this.app.use(this.paths.inventario, require('../routes/inventario'));
        this.app.use(this.paths.factura, require('../routes/factura'));
        this.app.use(this.paths.producto, require('../routes/producto'));
        this.app.use(this.paths.ubicacion, require('../routes/ubicacion'));
        this.app.use(this.paths.auditoria, require('../routes/auditoria'));
        this.app.use(this.paths.orden, require('../routes/ordencompra'));
        this.app.use(this.paths.ordendetalle, require('../routes/ordencompradetalle'));
        this.app.use(this.paths.inventario_servicios, require('../routes/inventario_servicios'));
        this.app.use(this.paths.devolucion, require('../routes/devoluciones'));
        this.app.use(this.paths.ventas, require('../routes/ventas'));
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
