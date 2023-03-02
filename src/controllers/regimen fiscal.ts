import { Response,Request} from "express"
const regimen= require("../models/regimen fiscal");
export class regimenf{
    obtenerregimen = async ( req:Request,res:Response) => {
    
        try {
    
            const regimenf = await regimen.find().sort({descripcion:1});
            res.json(regimenf)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new regimenf();