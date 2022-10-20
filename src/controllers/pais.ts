import { Response,Request} from "express"
const Paises = require("../models/pais");
export class paises{
    obtenerpaises = async ( req:Request,res:Response) => {
    
        try {
    
            const pais = await Paises.find();
            res.json(pais)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new paises();