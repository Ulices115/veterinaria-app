import { Response,Request} from "express"
const Usuario_Transaccion = require("../models/usuario_transaccion");
export class transacciones{
    crearUtransaccion = async ( req:any,res:Response) => {
        const _id_usuario = req.body.id_usuario
        const transaccion  = req.body.transaccion
        
        const transaccionDB = await Usuario_Transaccion.findOne({ _id_usuario});
        if(transaccionDB){
            return res.status(400).json({
                msg: `El Usuario-transaccion ${_id_usuario} ya existe`
            })
        } 
    
        const data = {
            _id_usuario,
             transaccion
        }
    
        console.log(data)    
        const trans = await new Usuario_Transaccion(data);
        await trans.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerUtransacciones = async (req:any,res:Response ) => {

        try {
            
            const trans = await Usuario_Transaccion.find().count();
            res.json(trans)
    
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerUtransaccion = async(req:any,res:Response ) => {
        const { id } = req.params;
        console.log(id);
        
        const trans = await Usuario_Transaccion.findOne({'_id_usuario':id})
        res.json( trans );
        console.log('Registro encontrado');
    }
    actualizarUtransaccion = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
        const trans = await Usuario_Transaccion.findByIdAndUpdate( id , data, {new:true});
    
        if(trans){
            res.json({
                 trans
            })
        }   
    
    }
    borrarUtransaccion= async(req:Request,res:Response) =>{
       
        try {
            let trans = await Usuario_Transaccion.findById(req.params.id);
    
            if(!trans) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            await Usuario_Transaccion.findOneAndRemove({ _id: req.params.id })
            // await Usuario_Transaccion.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'Utransaccion eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  

}
export default new transacciones();