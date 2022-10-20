import { Response,Request} from "express"
const inventario = require("../models/inventario");
export class Inventario{
    crearinventario = async ( req:any,res:Response) => {
        const id_inventario=req.body.id_inventario
        const id_producto = req.body.id_producto
        const precio=req.body.precio
        const cantidad=req.body.cantidad
        const ubicacion=req.body.ubicacion
        const costo=req.body.costo
     

        const productoDB = await inventario.findOne({id_inventario });
        if(productoDB){
            return res.status(400).json({
                msg: `el inventario ${id_inventario} ya existe`
            })
        } 
    
        const data = {
          id_inventario,
          id_producto,
          precio,
          cantidad,
          ubicacion,
          costo
        }
    
        console.log(data)    
        const producto = await new inventario(data);
        await producto.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerinventarios = async (req:any,res:Response ) => {
        try {
             const producto = await inventario.find().count();
            // const producto = await inventario.aggregate([
            //     { "$lookup": {
            //       from: "productos",
            //       foreignField: "id_producto",
            //       localField: "id_producto",
            //       as: "productos"
            //     }},
            //     { $unwind: "$productos"},
            //     { "$lookup": {
            //         from: "ubicacions",
            //         foreignField: "id_ubicacion",
            //         localField: "ubicacion",
            //         as: "ubicacion"
            //       }},
            //       { $unwind: "$ubicacion"},
            // ]);
    
            res.json(producto)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerinventario = async(req:any,res:Response ) => {
        var { id} = req.params;
        var {ubi} = req.query  
        // const producto = await inventario.find({'id_inventario': {'$regex': id,'$options': 'i'}})
        // .populate({
        //     path: 'id_producto',
        //     select: 'descripcion', 
        //     options: { limit: 10, sort: { titulo: 1 } }
        // });
        const producto = await inventario.aggregate([
            { "$lookup": {
                from: "ubicacions",
                foreignField: "id_ubicacion",
                localField: "ubicacion",
                as: "ubicacion"
              }},
              { $unwind: "$ubicacion"},
            { $match: {'ubicacion.id_ubicacion': ubi}},
            { "$lookup": {
                from: "productos",
                foreignField: "id_producto",
                localField: "id_producto",
                as: "productos"
              }},
              { $unwind: "$productos"},
              { $match: {'productos.descripcion': {'$regex': `^${id}`,'$options': 'i'}}},
              { $match: {activo:true}},
        ]).sort({'productos.descripcion':1}).limit(10);

        res.json( producto );
        console.log('Registro encontrado');
    }
    
    actualizarinventario = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.id_producto = data.id_producto.toUpperCase();
        data.id_inventario=data.id_inventario;
        data.precio=data.precio;
        data.costo=data.costo;
        data.cantidad=data.cantidad;
        data.ubicacion=data.ubicacion;
        
    
        const prod = await inventario.findByIdAndUpdate( id , data, {new:true});
    
        if(prod){
            res.json({
                prod
            })
        }   
    
    }
    borrarinventario= async(req:Request,res:Response) =>{
       
        try {
            let produc = await inventario.findById(req.params.id);
    
            if(!produc) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await inventario.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'Producto eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  
    
}
export default new Inventario();