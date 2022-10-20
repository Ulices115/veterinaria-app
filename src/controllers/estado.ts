import { Response,Request} from "express"
const estados = require("../models/estado");
export class estado{
    obtenerestado = async ( req:Request,res:Response) => {
    
        try {
               
            const { id } = req.params;
            console.log(id);
            
            const estado = await estados.find({})
            res.json(estado)
            console.log(estado);
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerestados = async ( req:Request,res:Response) => {
    
        try {
            
            const estado = await estados.aggregate([
                { "$lookup": {
                    from: "codigops",
                    foreignField: "c_Estado",
                    localField: "estado_fiscal",
                    as: "estadopostal"
                  }},
                  { $unwind: "$estadopostal"},
                ]);
            res.json(estado)
            console.log(estado);
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
}

export default new estado();