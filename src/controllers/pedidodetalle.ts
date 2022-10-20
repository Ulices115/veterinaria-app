import { Response,Request} from "express"
import { ClientSession } from "mongoose";
const ObjectId = require('mongoose').Types.ObjectId;
const Pedidodetalle = require("../models/pedidodetalle");
const Producto = require("../models/producto");
const inventario = require("../models/inventario");
export class pedidoD{
     crearpedidoD = async ( req:any,res:Response) => {
        const session: ClientSession = await Pedidodetalle.startSession();
        session.startTransaction();
        console.log(req);
    
        const id_pedido = req.query.id
        const descripcion= req.body.descripcion
        const cantidad= req.body.cantidad
        const precio= req.body.precio
        const importe=req.body.importe
        console.log(req.query.ubi);
        
        
    
        const data = {
          id_pedido,
          descripcion,
          cantidad,
          precio,
          importe
        }
        try {

        
            const pedidod = await new Pedidodetalle(data);
             await pedidod.save(); 
            console.log('Registro agregado');
            res.status(200).json(data);
             const producto= await Producto.find({'descripcion':pedidod['descripcion']})
             console.log(producto);
             
             if(producto.length>0){
                const inventarios = await inventario.find({$and:[{'id_producto':producto[0]['id_producto']},{ubicacion:req.query.ubi}]})
                console.log(inventarios);
                
                const nuevaexistencias=inventarios[0]['cantidad']-pedidod['cantidad'] 
                console.log(nuevaexistencias);
                
                 await inventario.updateOne({$and:[{id_producto:producto[0]['id_producto']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})
                console.log('inventario actualizado');          
            }else{
                console.log('no es producto para actualizar inventario');
                
             }
            // console.log('---------------');
            

            await session.commitTransaction();
        } catch (error) {

             session.abortTransaction();
             session.endSession();

            throw error;
        } finally {
            // Ending the session
            session.endSession();
        }
  
    }
    
 obtenerpedidosD = async ( req:any,res:Response) => {
        try {
    
            const pedidod = await Pedidodetalle.find();
            res.json(pedidod)
          
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerpedidoD = async( req:any,res:Response) => {
        const { id } = req.params;
        const pedidod = await Pedidodetalle.find({activo:true,"id_pedido":id.toUpperCase()});
        res.json( pedidod);
        console.log('Registro encontrado');
    }
    borrarpedidoD = async( req:any,res:Response) =>{
        console.log('ubi',req.query.ubi);
        try {
           if( ObjectId.isValid(req.params.id)){
                 let pedidod = await Pedidodetalle.findOne({"_id":req.params.id });
                 const producto= await Producto.findOne({'descripcion':pedidod['descripcion']})  
            if(producto){      
                console.log('inventario actualizado');
                         
                const inventariores = await inventario.findOne({$and:[{'id_producto':producto['id_producto']},{ubicacion:req.query.ubi}]})
                const nuevaexistencias=inventariores['cantidad']+pedidod['cantidad'] 
                await inventario.updateOne({$and:[{id_producto:producto['id_producto']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})
             }else{
                console.log('no es producto para actualizar inventario');
                
            }
             await Pedidodetalle.findOneAndRemove({ _id: req.params.id })
            
            res.json({ msg: 'Pedidodetalle eliminado con exito' });
           }else{
             let pedidod = await Pedidodetalle.find({"id_pedido":req.params.id });
             for(const pedido in pedidod){
                const producto= await Producto.find({'descripcion':pedidod[pedido]['descripcion']})   
                if(producto.length>0){      
                   for(const valor in producto){
                    console.log('inventario actualizado');
                    const inventariores = await inventario.findOne({$and:[{'id_producto':producto[valor]['id_producto']},{ubicacion:req.query.ubi}]})    
                    const nuevaexistencias=inventariores['cantidad']+pedidod[pedido]['cantidad'] 
                     await inventario.updateOne({$and:[{id_producto:producto[valor]['id_producto']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})

                   }
                }else{
                console.log('no es producto para actualizar inventario');
                
                }
             }
                  await Pedidodetalle.updateMany({"id_pedido":req.params.id },{activo:false},{new:true})
                  console.log('pedidodetalle',Pedidodetalle);
                  
                res.json({ msg: 'Pedidodetalle cancelado con exito' });
              
           }     
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
    actualizarpedidoD = async( req:any, res:Response ) => {
        // const { id } = req.params;
        // const { _id, ...data } = req.body;  
        // console.log(data); 
        // const pedidodetalle= await Pedidodetalle.updateOne({$and:[{"id_pedido":data.id_pedido},{'descripcion':data.descripcion}]}, data, {new:true});
        // if(pedidodetalle){
        //     res.json({
        //         pedidodetalle
        //     })
        // }   
    }
}

export default new pedidoD();