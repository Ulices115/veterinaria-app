import { Response,Request} from "express"
import { ClientSession } from "mongoose";   
const Pedido = require("../models/pedido");

export class pedido{
     crearpedido = async ( req:any,res:Response) => {
        const session: ClientSession = await Pedido.startSession();
        session.startTransaction();

        const rfc= req.body.rfc.toUpperCase() 
        const id_pedido = req.body.id_pedido
        const id_b_p = req.body.id_b_p
        const fecha =req.body.fecha
        const ubicacion=req.body.ubicacion
       
    
        console.log(id_pedido)
        const pedidoDB = await Pedido.findOne({ id_pedido });
        if(pedidoDB){
            return res.status(400).json({
                msg: `el pedido ${id_pedido} ya existe`
            })
        } 
    
        const data = {
          id_pedido,
          rfc,
          id_b_p,
          fecha,
          ubicacion
        }
        try {
            // TODO Add your statement here
            console.log(data)    
            const pedido = await new Pedido(data);
            await pedido.save({session});
            console.log('Registro agregado');
            res.status(200).json(data);
            // Commit the changes
             await session.commitTransaction();
        } catch (error) {
            // Rollback any changes made in the database
             session.abortTransaction();
             session.endSession();
            // Rethrow the error
            throw error;
        } finally {
            // Ending the session
            session.endSession();
        }
    }
    
     obtenerpedidos = async ( req:Request,res:Response) => {
        // const { limite = 5, desde = 0 } = req.query;
        // const query = { activo: true }    
        // const [total,servicios] = await Promise.all([
        //     Servicio.countDocuments(query),
        //     Servicio.find(query)
        //     // .populate('_id')
        //     .skip(Number(desde))
        //     .limit(Number(limite))
        // ]);
        
        // res.json({
        //     total,
        //     servicios
        // });
    
        // otra forma
    
        try {
            const pedido = await Pedido.find().count();
            res.json(pedido)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerpedido = async(req:Request,res:Response ) => {
        const { id } = req.params;
        var {tipo} = req.query
        const f_ini = String(req.query.f_ini)
        const f_fin = String(req.query.f_fin)
        const seleccion2= req.query.seleccion2
        const ubicacion=req.query.ubicacion
        // modulo facturar        
        if(tipo=='factura'){
            // const pedido = await Pedido.find({cancelado:false,$and:[{'id_pedido': {'$regex': `^${id}`,'$options': 'i'}},{status_f:'no pagado'}]}).limit(10);
            const pedido = await Pedido.aggregate([{$match:{cancelado:false,$and:[{'id_pedido': {'$regex': `${id}`,'$options': 'i'}},{'ubicacion':ubicacion},{facturado:false}]}}, 
            { "$lookup": {
                from: "b_ps",
                foreignField: "id_b_p",
                localField: "id_b_p",
                as: "socio"
              }},
              { $unwind: "$socio"}
        ]).limit(10).sort({id_pedido:1});
            res.json( pedido);
            console.log('pedi',pedido);
            console.log('tipo factura',ubicacion);
            
       }
        // modulo pedido edicion/baja    
        if(tipo=='filtro'){
            const pedido = await Pedido.aggregate([{$match:{cancelado:false,$and:[{'id_pedido': {'$regex': `^${id}`,'$options': 'i'}},{status_f:'no pagado'},{status_log:'carrito de compras'},{'ubicacion':ubicacion}]}},
            { "$lookup": {
                from: "b_ps",
                foreignField: "id_b_p",
                localField: "id_b_p",
                as: "socio"
              }},
              { $unwind: "$socio"},
    
              ]).limit(10).sort({id_pedido:1});
            res.json( pedido);
            console.log(pedido);
            
            console.log('sin tipo');
            // modulo de tratamiento de pedidos
       }if(tipo=='tratamiento'){
            if(id=='todos'&& seleccion2!=='todos'){
                const pedido= await Pedido.aggregate([{$match:{cancelado:false,$and:[{'status_f':seleccion2},{'ubicacion':ubicacion}]}},
                {$match: {fecha: 
                { $gte: new Date(f_ini), $lte: new Date(f_fin)}}},
                { "$lookup": {
                    from: "b_ps",
                    foreignField: "id_b_p",
                    localField: "id_b_p",
                    as: "socio"
                  }},
                  { $unwind: "$socio"},
        
                  ]);
            
                 res.json( pedido);
                
            }
           if(id!=='todos'&& seleccion2=='todos'){
               const pedido= await Pedido.aggregate([{$match:{cancelado:false,$and:[{'status_log':id},{'ubicacion':ubicacion}]}},
                {$match: {fecha: 
                { $gte: new Date(f_ini), $lte: new Date(f_fin)}}},
                { "$lookup": {
                    from: "b_ps",
                    foreignField: "id_b_p",
                    localField: "id_b_p",
                    as: "socio"
                  }},
                  { $unwind: "$socio"},
        
                  ]);
            
                 res.json( pedido);
                
            }
            if(id=='todos' && seleccion2=='todos'){
                const pedido= await Pedido.aggregate([{$match:{cancelado:false,$and:[{'ubicacion':ubicacion}]}},
                {$match: {fecha: 
                { $gte: new Date(f_ini), $lte: new Date(f_fin)}}},
                { "$lookup": {
                    from: "b_ps",
                    foreignField: "id_b_p",
                    localField: "id_b_p",
                    as: "socio"
                  }},
                  { $unwind: "$socio"},
        
                  ]);
            
                 res.json( pedido);
                
            }
            if(id!=='todos'&& seleccion2!=='todos'){
                const pedido= await Pedido.aggregate([{$match:{cancelado:false,$and:[{'status_f':seleccion2},{'status_log':id},{'ubicacion':ubicacion}]}},
                {$match: {fecha: 
                { $gte: new Date(f_ini), $lte: new Date(f_fin)}}},
                { "$lookup": {
                    from: "b_ps",
                    foreignField: "id_b_p",
                    localField: "id_b_p",
                    as: "socio"
                  }},
                  { $unwind: "$socio"},
        
                  ]);
            
                 res.json( pedido);
            }
    
            //modulo de devoluciones  
        }if(tipo=='devolucion'){
            // const pedido = await Pedido.find({cancelado:false,$and:[{'id_pedido': {'$regex': `^${id}`,'$options': 'i'}},{status_f:'pagado'},{status_log:'procesado'}]}).limit(10).sort({id_pedido:1});
            const pedido = await Pedido.aggregate([{$match:{cancelado:false,$and:[{'id_pedido': {'$regex': `^${id}`,'$options': 'i'}},{status_f:'pagado'},{status_log:'procesado'},{'ubicacion':ubicacion}]}},
            { "$lookup": {
                from: "b_ps",
                foreignField: "id_b_p",
                localField: "id_b_p",
                as: "socio"
              }},
              { $unwind: "$socio"},
    
              ]).limit(10).sort({id_pedido:1});
            res.json( pedido);
            console.log(pedido);
            
            console.log('en devolucion');
            // modulo de descarga de factura
        }if(tipo=='facturado'){
            const pedido = await Pedido.aggregate([{$match:{cancelado:false,$and:[{'id_pedido': {'$regex': `${id}`,'$options': 'i'}},{facturado:true},{'ubicacion':ubicacion}]}}, 
            { "$lookup": {
                from: "b_ps",
                foreignField: "id_b_p",
                localField: "id_b_p",
                as: "socio"
              }},
              { $unwind: "$socio"}
        ]).limit(10).sort({id_pedido:1});
            res.json( pedido);
            console.log(pedido);
            
            console.log('en facturado');
        }
      
        console.log('Registro encontrado');
    }
    borrarpedido = async(req:Request,res:Response) =>{
       
        try {
            let pedido = await Pedido.findById(req.params.id);
    
            if(!pedido) {
                res.status(404).json({ msg: 'No existe el pedido' })
            }
   
             await Pedido.findByIdAndUpdate(req.params.id ,{cancelado:true},{new:true})
            // await Pedido.findOneAndRemove({ _id: req.params.id })
            res.json({ msg: 'Pedido eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
    actualizarpedido = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;  
        const pedido = await Pedido.updateOne( {"id_pedido":id}, data, {new:true});
    
        if(pedido){
            res.json({
                pedido
            })
        }   
    
    }
 
}
export default new pedido();
