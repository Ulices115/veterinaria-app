import { Response,Request} from "express"
const Codigop = require("../models/codigop");
export class codigopostal{
    obtenercodigop = async ( req:Request,res:Response) => {
    
        try {
            const { id } = req.params;
            console.log(id);
            
            const cod = await Codigop.aggregate([ {$match: {c_CodigoPostal: Number(id)}},
              { "$lookup": {
                from: "estados",
                foreignField: "estado_fiscal",
                localField: "c_Estado",
                as: "estado"
              }},
              { $unwind: "$estado"},
            // { "$lookup": {
            //     from: "municipios",
            //     foreignField:"c_Estado",
            //     localField:"c_Estado",
            //     as: "municipio"
            //   }},
            //   { $unwind: "$municipio"},

        ])
            res.json(cod)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new codigopostal();