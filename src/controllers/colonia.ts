import { Response,Request} from "express"
const Colonia = require("../models/colonia");
export class colonia{
    obtenercolonia = async ( req:Request,res:Response) => {  
        try {
            
            const { id } = req.params;
            const col = await Colonia.find({"c_CodigoPostal":Number(id)}).sort({Nombre_del_asentamiento:1});
            res.json(col)
        
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new colonia();