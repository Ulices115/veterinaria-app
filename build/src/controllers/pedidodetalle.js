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
exports.pedidoD = void 0;
const ObjectId = require('mongoose').Types.ObjectId;
const Pedidodetalle = require("../models/pedidodetalle");
const Producto = require("../models/producto");
const inventario = require("../models/inventario");
class pedidoD {
    constructor() {
        this.crearpedidoD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const session = yield Pedidodetalle.startSession();
            session.startTransaction();
            console.log(req);
            const id_pedido = req.query.id;
            const descripcion = req.body.descripcion;
            const cantidad = req.body.cantidad;
            const precio = req.body.precio;
            const importe = req.body.importe;
            console.log(req.query.ubi);
            const data = {
                id_pedido,
                descripcion,
                cantidad,
                precio,
                importe
            };
            try {
                const pedidod = yield new Pedidodetalle(data);
                yield pedidod.save();
                console.log('Registro agregado');
                res.status(200).json(data);
                const producto = yield Producto.find({ 'descripcion': pedidod['descripcion'] });
                console.log(producto);
                if (producto.length > 0) {
                    const inventarios = yield inventario.find({ $and: [{ 'id_producto': producto[0]['id_producto'] }, { ubicacion: req.query.ubi }] });
                    console.log(inventarios);
                    const nuevaexistencias = inventarios[0]['cantidad'] - pedidod['cantidad'];
                    console.log(nuevaexistencias);
                    yield inventario.updateOne({ $and: [{ id_producto: producto[0]['id_producto'] }, { ubicacion: req.query.ubi }] }, { cantidad: nuevaexistencias });
                    console.log('inventario actualizado');
                }
                else {
                    console.log('no es producto para actualizar inventario');
                }
                // console.log('---------------');
                yield session.commitTransaction();
            }
            catch (error) {
                session.abortTransaction();
                session.endSession();
                throw error;
            }
            finally {
                // Ending the session
                session.endSession();
            }
        });
        this.obtenerpedidosD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const pedidod = yield Pedidodetalle.find();
                res.json(pedidod);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerpedidoD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedidod = yield Pedidodetalle.find({ activo: true, "id_pedido": id.toUpperCase() });
            res.json(pedidod);
            console.log('Registro encontrado');
        });
        this.borrarpedidoD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log('ubi', req.query.ubi);
            try {
                if (ObjectId.isValid(req.params.id)) {
                    let pedidod = yield Pedidodetalle.findOne({ "_id": req.params.id });
                    const producto = yield Producto.findOne({ 'descripcion': pedidod['descripcion'] });
                    if (producto) {
                        console.log('inventario actualizado');
                        const inventariores = yield inventario.findOne({ $and: [{ 'id_producto': producto['id_producto'] }, { ubicacion: req.query.ubi }] });
                        const nuevaexistencias = inventariores['cantidad'] + pedidod['cantidad'];
                        yield inventario.updateOne({ $and: [{ id_producto: producto['id_producto'] }, { ubicacion: req.query.ubi }] }, { cantidad: nuevaexistencias });
                    }
                    else {
                        console.log('no es producto para actualizar inventario');
                    }
                    yield Pedidodetalle.findOneAndRemove({ _id: req.params.id });
                    res.json({ msg: 'Pedidodetalle eliminado con exito' });
                }
                else {
                    let pedidod = yield Pedidodetalle.find({ "id_pedido": req.params.id });
                    for (const pedido in pedidod) {
                        const producto = yield Producto.find({ 'descripcion': pedidod[pedido]['descripcion'] });
                        if (producto.length > 0) {
                            for (const valor in producto) {
                                console.log('inventario actualizado');
                                const inventariores = yield inventario.findOne({ $and: [{ 'id_producto': producto[valor]['id_producto'] }, { ubicacion: req.query.ubi }] });
                                const nuevaexistencias = inventariores['cantidad'] + pedidod[pedido]['cantidad'];
                                yield inventario.updateOne({ $and: [{ id_producto: producto[valor]['id_producto'] }, { ubicacion: req.query.ubi }] }, { cantidad: nuevaexistencias });
                            }
                        }
                        else {
                            console.log('no es producto para actualizar inventario');
                        }
                    }
                    yield Pedidodetalle.updateMany({ "id_pedido": req.params.id }, { activo: false }, { new: true });
                    console.log('pedidodetalle', Pedidodetalle);
                    res.json({ msg: 'Pedidodetalle cancelado con exito' });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
        });
        this.actualizarpedidoD = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const { id } = req.params;
            // const { _id, ...data } = req.body;  
            // console.log(data); 
            // const pedidodetalle= await Pedidodetalle.updateOne({$and:[{"id_pedido":data.id_pedido},{'descripcion':data.descripcion}]}, data, {new:true});
            // if(pedidodetalle){
            //     res.json({
            //         pedidodetalle
            //     })
            // }   
        });
    }
}
exports.pedidoD = pedidoD;
exports.default = new pedidoD();
