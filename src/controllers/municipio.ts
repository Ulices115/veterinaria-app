import { Response,Request} from "express"
const Municipio = require("../models/municipio");
export class municipios{
    obtenermunicipio = async ( req:Request,res:Response) => { 
        try {
    
            const municipio = await Municipio.find({"c_Municipio":req.params.id}).sort({Descripcion:1});
            res.json(municipio)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new municipios();