import { Response,Request} from "express"
const Pedido = require("../models/pedido");
const Pedidodetalle = require("../models/pedidodetalle");
export class reporteventas{
    obtenerpedidos = async ( req:Request,res:Response) => {
        const { id } = req.params;
        const f_ini = String(req.query.f_ini)
        const f_fin = String(req.query.f_fin)
        const seleccion2= req.query.seleccion2
        const ubicacion=req.query.ubicacion
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
              { "$lookup": {
                from: "pedidodetalles",
                foreignField: "id_pedido",
                localField: "id_pedido",
                as: "detalles"
              }},
              { $unwind: "$detalles"}
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
              { "$lookup": {
                from: "pedidodetalles",
                foreignField: "id_pedido",
                localField: "id_pedido",
                as: "detalles"
              }},
              { $unwind: "$detalles"}
              ]);
        
             res.json( pedido);
            
        }
        if(id=='todos' && seleccion2=='todos'){
            const pedido= await Pedido.aggregate([{$match:{cancelado:false,'ubicacion':ubicacion}},
            {$match: {fecha: 
            { $gte: new Date(f_ini), $lte: new Date(f_fin)}}},
            { "$lookup": {
                from: "b_ps",
                foreignField: "id_b_p",
                localField: "id_b_p",
                as: "socio"
              }},
              { $unwind: "$socio"},
              { "$lookup": {
                from: "pedidodetalles",
                foreignField: "id_pedido",
                localField: "id_pedido",
                as: "detalles"
              }},
              { $unwind: "$detalles"}
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
              { "$lookup": {
                from: "pedidodetalles",
                foreignField: "id_pedido",
                localField: "id_pedido",
                as: "detalles"
              }},
              { $unwind: "$detalles"}
              ]);
        
             res.json( pedido);
        }

    }
        
    
}
export default new reporteventas();