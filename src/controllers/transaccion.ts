import { Response,Request} from "express"
const Transaccion = require("../models/transacciones");
export class transacciones{
    creartransaccion = async ( req:any,res:Response) => {
        const modulo  = req.body.modulo.toUpperCase()   
        const transaccion  = req.body.transaccion.toUpperCase()   
        const referencia  = req.body.referencia.toUpperCase()   
        const descripcion  = req.body.descripcion
        
        const transaccionDB = await Transaccion.findOne({referencia});
        if(transaccionDB){
            return res.status(400).json({
                msg: `la transaccion ${referencia} ya existe`
            })
        } 
    
        const data = {
        modulo,
        transaccion,
        referencia,
        descripcion,
        }
    
        console.log(data)    
        const trans = await new Transaccion(data);
        await trans.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenertransacciones = async (req:any,res:Response ) => {
        try {
            
            const trans = await Transaccion.find().count();
            res.json(trans)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenertransaccion = async(req:any,res:Response ) => {
        const { id } = req.params;
        const trans = await Transaccion.find({activo:true,'referencia': {'$regex': id,'$options': 'i'}}).sort({descripcion:1}).limit(10);
        res.json( trans );
        console.log('Registro encontrado');
    }
    actualizartransaccion = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.transaccion=data.transaccion.toUpperCase();
        
    
        const trans = await Transaccion.findByIdAndUpdate( id , data, {new:true});
    
        if(trans){
            res.json({
                 trans
            })
        }   
    
    }
    borrartransaccion= async(req:Request,res:Response) =>{
       
        try {
            let trans = await Transaccion.findById(req.params.id);
    
            if(!trans) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await Transaccion.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'transaccion eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  

}
export default new transacciones();