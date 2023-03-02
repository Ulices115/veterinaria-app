import { Response,Request} from "express"
const Configuracion = require("../models/configuracion");
export class configuracion{
    crearconfiguracion = async ( req:any,res:Response) => {
        const rfc  = req.body.rfc.toUpperCase()   
        const razon_social=req.body.razon_social
        const regimen_f=req.body.regimen_f
        const lugar_exp = req.body.lugar_exp
        const correo=req.body.correo
        const password=req.body.password
        const exportacion = req.body.exportacion
        const moneda = req.body.moneda
        const serie= req.body.serie
        const tipo_comprobante=req.body.tipo_comprobante
        const certificado=req.body.certificado
        const key=req.body.key
    
        // const configDB = await Configuracion.findOne({razon_social});
        // if(configDB){
        //     return res.status(400).json({
        //         msg: `la entidad ${razon_social} ya existe`
        //     })
        // } 
    
        const data = {
        rfc,
        razon_social,
        regimen_f,
        lugar_exp,
        correo,
        password,
        exportacion,
        moneda,
        serie,
        tipo_comprobante,
        certificado,
        key,
        }
        console.log(data)    
        const confi = await new Configuracion(data);
        await confi.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerconfiguracion= async ( req:Request,res:Response) => {
    
        try {
               
            const { id } = req.params;
            console.log(id);
            
            const configuracion = await Configuracion.find({'razon_social':'INDISTRIA ILUMINADORA DE ALMACENES'})
            res.json(configuracion)
        
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registro encontrado');
    }
    obtenerconfiguraciones= async ( req:Request,res:Response) => {
    
        try {
               
            const { id } = req.params;
            console.log(id);
            
            const configuracion = await Configuracion.find()
            res.json(configuracion)
     
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registro encontrado');
    }
    actualizarconfiguracion = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.rfc=data.rfc.toUpperCase();
        data.moneda=data.moneda.toUpperCase();
    
        const configuracion = await Configuracion.findByIdAndUpdate( id , data, {new:true});
    
        if(configuracion){
            res.json({
                 trans: configuracion
            })
        }   
    
    }
}

export default new configuracion();