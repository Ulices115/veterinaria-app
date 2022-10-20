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
exports.devolucion = void 0;
const Devoluciones = require("../models/devoluciones");
const inventario = require("../models/inventario");
class devolucion {
    constructor() {
        this.creardevolucion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id_devolucion = req.body.id_devolucion.toUpperCase();
            const id_pedido = req.body.id_pedido.toUpperCase();
            const descripcion = req.body.descripcion;
            const cantidad_devuelta = req.body.cantidad_devuelta;
            const precio = req.body.precio;
            const importe = req.body.importe;
            const fecha = req.body.fecha;
            console.log(id_devolucion);
            const devolucionDB = yield Devoluciones.findOne({ id_devolucion });
            if (devolucionDB) {
                return res.status(400).json({
                    msg: `el ${id_devolucion} ya existe`
                });
            }
            const data = {
                id_devolucion,
                id_pedido,
                descripcion,
                cantidad_devuelta,
                precio,
                importe,
                fecha
            };
            console.log('devolucion creada');
            // console.log(data)    
            const devolucion = yield new Devoluciones(data);
            yield devolucion.save();
            console.log('Registro agregado');
            res.status(200).json(data);
            var { ubi } = req.query;
            const devoluciones = yield Devoluciones.aggregate([
                { "$lookup": {
                        from: "productos",
                        foreignField: "descripcion",
                        localField: "descripcion",
                        as: "productos"
                    } },
                { $unwind: "$productos" },
                { $match: { 'id_pedido': data.id_pedido } },
                { $match: { activo: true } },
            ]);
            console.log(devoluciones);
            // if(devoluciones.length>0){
            const inventarios = yield inventario.find({ $and: [{ 'id_producto': devoluciones[devoluciones.length - 1]['productos']['id_producto'] }, { ubicacion: ubi }] });
            const nuevaexistencias = inventarios[0]['cantidad'] + devoluciones[devoluciones.length - 1]['cantidad_devuelta'];
            yield inventario.updateOne({ $and: [{ id_producto: devoluciones[devoluciones.length - 1]['productos']['id_producto'] }, { ubicacion: ubi }] }, { cantidad: nuevaexistencias });
            // }else{
            //     console.log('no es un producto');
            // }
        });
        this.obtenerdevoluciones = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const devolucion = yield Devoluciones.find().count();
                res.json(devolucion);
            }
            catch (error) {
                console.log(error);
                res.status(500).send('Hubo un error');
            }
            console.log('Registros encontrados');
        });
        this.obtenerdevolucion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (id.charAt('P') == 'P') {
                const devolucion = yield Devoluciones.find({ activo: true, "id_pedido": id.toUpperCase() });
                res.json(devolucion);
            }
            else {
                const devolucion = yield Devoluciones.aggregate([{ $match: { "$expr": {
                                "$and": [
                                    { $eq: [{ $year: "$fecha" }, { $year: new Date(id) }] },
                                    { $eq: [{ $month: "$fecha" }, { $month: new Date(id) }] },
                                    { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(id) }] },
                                ]
                            } } }]);
                res.json(devolucion);
            }
            console.log('Registro encontrado');
        });
    }
}
exports.devolucion = devolucion;
exports.default = new devolucion();
