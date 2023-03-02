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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.validacionesdb = exports.producto_servicio = exports.inventario_general = exports.devoluciones = exports.inventario_servicios = exports.inventario = exports.ubicacion = exports.producto = exports.Servicio = exports.pedido = exports.b_p = exports.Usuario = exports.Role = void 0;
const ObjectId = require('mongoose').Types.ObjectId;
_a = require('../models'), exports.Role = _a.Role, exports.Usuario = _a.Usuario, exports.b_p = _a.b_p, exports.pedido = _a.pedido, exports.Servicio = _a.Servicio, exports.producto = _a.producto, exports.ubicacion = _a.ubicacion, exports.inventario = _a.inventario, exports.inventario_servicios = _a.inventario_servicios, exports.devoluciones = _a.devoluciones, exports.inventario_general = _a.inventario_general, exports.producto_servicio = _a.producto_servicio;
class validacionesdb {
    constructor() {
        this.id_ubicacion = '';
        this.ubicacion = '';
        this.tipo = '';
        this.esRoleValido = (rol = '') => __awaiter(this, void 0, void 0, function* () {
            console.log('rol es', rol);
            const existeRol = yield exports.Role.findOne({ rol: rol });
            console.log(existeRol);
            if (!existeRol) {
                throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
            }
        });
        this.existeEmail = (correo = '') => __awaiter(this, void 0, void 0, function* () {
            const existe = yield exports.Usuario.findOne({ correo });
            if (existe) {
                throw new Error(`El correo: ${correo} ya existe`);
            }
        });
        this.existeUsuarioPorId = (id) => __awaiter(this, void 0, void 0, function* () {
            const existeUsuario = yield exports.Usuario.findById(id);
            if (!existeUsuario) {
                throw new Error(`No existe id del usuario ${id}`);
            }
        });
        this.existeubicacion = (id) => __awaiter(this, void 0, void 0, function* () {
            const existeubicacion = yield exports.ubicacion.findOne({ 'descripcion': id.toUpperCase() });
            if (existeubicacion) {
                throw new Error(`ya existe el producto${id}`);
            }
        });
        this.existeinventarioubi = (id) => __awaiter(this, void 0, void 0, function* () {
            this.id_ubicacion = id;
        });
        this.existeservicioubi = (id) => __awaiter(this, void 0, void 0, function* () {
            this.ubicacion = id;
        });
        this.esproductodevuelto = (id) => __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const existeinv = yield exports.producto_servicio.find({ $and: [{ 'descripcion': id }, { tipo: 'Producto' }] });
            console.log(existeinv);
            if (existeinv.length == 0) {
                throw new Error(`La devolucion no es un producto `);
            }
        });
        //  existeRolePorId = async( id:any ) => {
        //     const existeRol = await Role.findById( id );
        //     if( !existeRol ){
        //         throw new Error(`No existe id del Rol: ${id}`);
        //     }
        // }
        this.existeb_pPorId = (id) => __awaiter(this, void 0, void 0, function* () {
            const existeb_p = yield exports.b_p.findById(id);
            if (!existeb_p) {
                throw new Error(`No existe id del b_p ${id}`);
            }
        });
        this.existepedidob_p = (id) => __awaiter(this, void 0, void 0, function* () {
            const b_ps = yield exports.b_p.findById(id);
            const pedidos = yield exports.pedido.find({ $and: [{ 'id_b_p': b_ps['id_b_p'] }, { status_log: 'carrito de compras' }] });
            console.log('pedidos', pedidos);
            if (pedidos.length > 0) {
                throw new Error(`existen pedidos pendientes para eñ b_p`);
            }
        });
        this.existepedidoPorId = (id) => __awaiter(this, void 0, void 0, function* () {
            const existepedido = yield exports.pedido.findById(id);
            if (!existepedido) {
                throw new Error(`No existe id del pedido ${id}`);
            }
        });
        this.existepedido = (id_pedido) => __awaiter(this, void 0, void 0, function* () {
            const existepedido = yield exports.pedido.find({ 'id_pedido': id_pedido });
            if (!existepedido) {
                throw new Error(`ya existe id del pedido ${id_pedido}`);
            }
        });
        // nuevos por la unificacion de tablas
        this.existeprod_serv = (id) => __awaiter(this, void 0, void 0, function* () {
            const existeproducto = yield exports.producto_servicio.findOne({ 'descripcion': id.toUpperCase() });
            if (existeproducto) {
                throw new Error(`ya existe el producto/servicio :${id}`);
            }
        });
        this.existetipo = (id) => __awaiter(this, void 0, void 0, function* () {
            this.tipo = id;
        });
        this.existeinventarioprod_serv = (id) => __awaiter(this, void 0, void 0, function* () {
            const existeinv = yield exports.inventario_general.findOne({ $and: [{ 'id_prod_serv': id }, { 'ubicacion': this.id_ubicacion }, { 'tipo': this.tipo }] });
            if (existeinv) {
                throw new Error(`El producto o servicio: ${id} ya existe en esa ubicacion `);
            }
        });
        this.existeinventario = (id) => __awaiter(this, void 0, void 0, function* () {
            const inv = yield exports.inventario_general.findById(id);
            console.log(inv['cantidad']);
            if (inv['cantidad'] > 0) {
                throw new Error(`Inventario con existencias `);
            }
        });
        // usuario-ubicacion de acceso
        this.existeubicacionu = (ubicacionusuario) => __awaiter(this, void 0, void 0, function* () {
            // console.log('ubi',ubicacionusuario);
            if (ubicacionusuario !== '') {
                const existe = yield exports.ubicacion.findOne({ 'descripcion': ubicacionusuario });
                if (existe == null) {
                    console.log('validacion:no existe la ubicacion');
                    throw new Error(`validacion:no existe la ubicacion`);
                }
            }
        });
    }
}
exports.validacionesdb = validacionesdb;
exports.default = new validacionesdb();
