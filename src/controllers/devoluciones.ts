import { Response,Request} from "express"
const Devoluciones = require("../models/devoluciones");
const inventario_general = require("../models/inventario_general");
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
            const inventarios = await inventario_general.find({$and:[{'id_inventario':req.body.referencia},{ubicacion:ubi}]})
            const nuevaexistencias=inventarios[0]['cantidad']+ req.body.cantidad_devuelta
            console.log(nuevaexistencias);
            await inventario_general.updateOne({$and:[{'id_inventario':req.body.referencia},{ubicacion:ubi}]},{cantidad:nuevaexistencias})
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
        const fin = String(req.query.fin)
        console.log('devolucion',id,fin);
        
        if(id.charAt('P')=='P'){
            const fecha=new Date()
            //  const devolucion = await Devoluciones.find({activo:true,"id_pedido":id.toUpperCase()});
            const devolucion = await Devoluciones.aggregate([
                { $match: {activo:true}},
                { $match: {'id_pedido':id.toUpperCase()}},
                {$match: { "$expr": {
                    "$and": [
                      { $eq: [{ $year: "$fecha" }, { $year: new Date(fecha) }]},
                      { $eq: [{ $month: "$fecha" }, { $month: new Date(fecha) }]},
                      { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(fecha) }]},
                    ]
                  }}}
            ]);
             res.json( devolucion);
        }else{
        const devolucion = await Devoluciones.aggregate([ {$match: {fecha: 
            { $gte: new Date(id), $lte: new Date(fin)}}}
        ]);
        console.log(devolucion);
        
        res.json( devolucion);
        }
        

        console.log('Registro encontrado');
    }
}

export default new devolucion();