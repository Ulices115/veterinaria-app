import { Response,Request} from "express"
const Localidad = require("../models/localidad");
export class localidad{
    obtenermlocalidad = async ( req:Request,res:Response) => {
    
        try {
    
            const local = await Localidad.find();
            res.json(local)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new localidad();