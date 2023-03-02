import { Response,Request} from "express"
import { ClientSession } from "mongoose";
const ObjectId = require('mongoose').Types.ObjectId;
const Pedidodetalle = require("../models/pedidodetalle");
const inventario_general = require("../models/inventario_general");

const movimientos = require("../models/movimientos_inv");
export class pedidoD{
     crearpedidoD = async ( req:any,res:Response) => {
        const session: ClientSession = await Pedidodetalle.startSession();
        session.startTransaction();
        console.log(req);
    
        const id_pedido = req.query.id
        const descripcion= req.body.descripcion
        const cantidad= req.body.cantidad
        const precio= req.body.precio
        const referencia=req.body.referencia
        const subtotal=req.body.subtotal
        const descuento=req.body.descuento
        const importe=req.body.importe
        console.log(req.query.ubi);
        
        
    
        const data = {
          id_pedido,
          referencia,
          descripcion,
          cantidad,
          precio,
          subtotal,
          descuento,
          importe,
        }
        try {
     
            const pedidod = await new Pedidodetalle(data);
             await pedidod.save(); 
            console.log('Registro agregado');
            res.status(200).json(data);
            const inventario= await inventario_general.find({'id_inventario':pedidod['referencia']})            
            if(inventario[0]['tipo']=='Producto'){
                const nuevaexistencias=inventario[0]['cantidad']-pedidod['cantidad'] 
                await inventario_general.updateOne({$and:[{id_inventario:pedidod['referencia']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})
                console.log('inventario actualizado');    
                const data = {
                    referencia:id_pedido,
                    ubicacion:req.query.ubi,
                    fecha:new Date,
                    tipo:'Salida',
                    tipo_ajuste:'Pedido',
                    cantidad_inicial:inventario[0]['cantidad'],
                    cantidad_final:nuevaexistencias
                }
                console.log('movimiento_inv creada');
                const movimiento = await new movimientos(data);
                await movimiento.save();  
            }else{
                console.log('no es producto para actualizar inventario');   
            }

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
        console.log('ubi',req.query.pedido);
        try {
           if( ObjectId.isValid(req.params.id)){
                let pedidod = await Pedidodetalle.findOne({"_id":req.params.id });
                const inventario= await inventario_general.find({'id_inventario':pedidod['referencia']})            
                if(inventario[0]['tipo']=='Producto'){
                    const nuevaexistencias=inventario[0]['cantidad']+pedidod['cantidad'] 
                    await inventario_general.updateOne({$and:[{id_inventario:pedidod['referencia']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})
                    console.log('inventario actualizado');  

                    const data = {
                        referencia:req.query.pedido,
                        ubicacion:req.query.ubi,
                        fecha:new Date,
                        tipo:'Entrada',
                        tipo_ajuste:'Pedido detalle eliminado',
                        cantidad_inicial:inventario[0]['cantidad'],
                        cantidad_final:nuevaexistencias
                    }
                    console.log('movimiento_inv creada');
                    const movimiento = await new movimientos(data);
                    await movimiento.save(); 
                }else{
                    console.log('no es producto para actualizar inventario');   
                }
             await Pedidodetalle.findOneAndRemove({ _id: req.params.id })
            
            res.json({ msg: 'Pedidodetalle eliminado con exito' });
           }else{
             let pedidod = await Pedidodetalle.find({"id_pedido":req.params.id });        
             for(const pedidos in pedidod){
                const inventario= await inventario_general.find({'id_inventario':pedidod[pedidos]['referencia']})         
                if(inventario[0]['tipo']=='Producto'){
                    const nuevaexistencias=inventario[0]['cantidad']+pedidod[pedidos]['cantidad'] 
                    await inventario_general.updateOne({$and:[{id_inventario:pedidod[pedidos]['referencia']},{ubicacion:req.query.ubi}]},{cantidad:nuevaexistencias})
                    console.log('inventario actualizado');  

                    const data = {
                        referencia:req.params.id ,
                        ubicacion:req.query.ubi,
                        fecha:new Date,
                        tipo:'Entrada',
                        tipo_ajuste:'Pedido cancelado',
                        cantidad_inicial:inventario[0]['cantidad'],
                        cantidad_final:nuevaexistencias
                    }
                    console.log('movimiento_inv creada');
                    const movimiento = await new movimientos(data);
                    await movimiento.save(); 
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