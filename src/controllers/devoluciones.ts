import { Response,Request} from "express"
const Devoluciones = require("../models/devoluciones");
const inventario = require("../models/inventario");
export class devolucion{
    creardevolucion = async ( req:any,res:Response) => {
        const id_devolucion= req.body.id_devolucion.toUpperCase() 
        const id_pedido = req.body.id_pedido.toUpperCase()
        const descripcion=req.body.descripcion
        const cantidad_devuelta=req.body.cantidad_devuelta
        const precio=req.body.precio
        const importe=req.body.importe
        const fecha=req.body.fecha
    
        console.log(id_devolucion)
        const devolucionDB = await Devoluciones.findOne({ id_devolucion});
        if(devolucionDB){
            return res.status(400).json({
                msg: `el ${id_devolucion} ya existe`
            })
        } 
    
        const data = {
          id_devolucion,
          id_pedido,
          descripcion,
          cantidad_devuelta,
          precio,
          importe,
          fecha
        }
        console.log('devolucion creada');
        // console.log(data)    
        const devolucion = await new Devoluciones(data);
        await devolucion.save();
        console.log('Registro agregado');
        res.status(200).json(data);

        var {ubi} = req.query
        const devoluciones = await Devoluciones.aggregate([
            { "$lookup": {
                from: "productos",
                foreignField: "descripcion",
                localField: "descripcion",
                as: "productos"
              }},
              { $unwind: "$productos"},
              { $match: {'id_pedido': data.id_pedido}},
              { $match: {activo:true}},
        ])
        console.log(devoluciones);
        // if(devoluciones.length>0){
            const inventarios = await inventario.find({$and:[{'id_producto':devoluciones[devoluciones.length - 1]['productos']['id_producto']},{ubicacion:ubi}]})
            const nuevaexistencias=inventarios[0]['cantidad']+devoluciones[devoluciones.length - 1]['cantidad_devuelta']
            await inventario.updateOne({$and:[{id_producto:devoluciones[devoluciones.length - 1]['productos']['id_producto']},{ubicacion:ubi}]},{cantidad:nuevaexistencias})
        // }else{
        //     console.log('no es un producto');
           
        // }
        
 
    }
    obtenerdevoluciones = async ( req:Request,res:Response) => {
        try {
    
            const devolucion = await Devoluciones.find().count();
            res.json(devolucion)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }   
    obtenerdevolucion= async( req:any,res:Response) => {
        const { id } = req.params;
        if(id.charAt('P')=='P'){
             const devolucion = await Devoluciones.find({activo:true,"id_pedido":id.toUpperCase()});
             res.json( devolucion);
        }else{
        const devolucion = await Devoluciones.aggregate([ {$match: { "$expr": {
            "$and": [
              { $eq: [{ $year: "$fecha" }, { $year: new Date(id) }]},
              { $eq: [{ $month: "$fecha" }, { $month: new Date(id) }]},
              { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(id) }]},
            ]
          }}}]
        );
        res.json( devolucion);
        }
        

        console.log('Registro encontrado');
    }
}

export default new devolucion();