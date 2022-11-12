import { Response,Request} from "express"
const Pedido = require("../models/pedido");
const Pedidodetalle = require("../models/pedidodetalle");
export class reporteventas{
    obtenerpedidos = async ( req:Request,res:Response) => {
        const { id } = req.params;
        const fin = String(req.query.fin)
        console.log(id);
        console.log(fin);
        
        
        try {

          const pedidos = await Pedido.aggregate([ {$match: {fecha: 
            { $gte: new Date(id), $lte: new Date(fin)}}},
            {$match: {status_f: 'pagado'}},
            { "$lookup": {
              from: "pedidodetalles",
              foreignField: "id_pedido",
              localField: "id_pedido",
              as: "detalles"
            }},
            { $unwind: "$detalles"}
        ]);
            res.json(pedidos)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
        
    
}
export default new reporteventas();