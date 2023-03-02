import { Response,Request} from "express"
const clave= require("../models/clave usof");
export class claveusof{
    crearclave= async ( req:any,res:Response) => {
        const descripcion= req.body.descripcion
        const fecha_fin_vigencia = req.body.fecha_fin_vigencia
        const fecha_inicio_vigencia= req.body.fecha_inicio_vigencia
        const fisica=req.body.fisica
        const moral=req.body.moral
        const id_cfdi=req.body.id_cfdi
        const regimen_fiscal_receptor=req.body.regimen_fiscal_receptor

        console.log(id_cfdi)
        const claveDB = await clave.findOne({ id_cfdi });
        if(claveDB){
            return res.status(400).json({
                msg: `el id_cfdi ${id_cfdi} ya existe`
            })
        } 
    
        const data = {
         descripcion,
         fecha_fin_vigencia,
         fecha_inicio_vigencia,
         fisica,
         moral,
         id_cfdi,
         regimen_fiscal_receptor
        }
    
        console.log(data)    
        const clavef = await new clave(data);
        await clavef.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    


    obtenerclave = async ( req:Request,res:Response) => {
    
        try {
    
            const claveusof = await clave.find().sort({descripcion:1});
            res.json(claveusof)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new claveusof();