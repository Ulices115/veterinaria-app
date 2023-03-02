import { Response,Request} from "express"
const Ubicacion = require("../models/ubicacion");
export class ubicacion{
    crearubicacion = async ( req:any,res:Response) => {
        const descripcion= req.body.descripcion.toUpperCase() 
        const id_ubicacion = req.body.id_ubicacion
         
        const ubicacionDB = await Ubicacion.findOne({id_ubicacion });
        if(ubicacionDB){
            return res.status(400).json({
                msg: `la ubicacion ${id_ubicacion} ya existe`
            })
        } 
    
        const data = {
         id_ubicacion,
          descripcion,
        }
    
        console.log(data)    
        const ubicacion = await new Ubicacion(data);
        await ubicacion.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerubicaciones = async (req:any,res:Response ) => {
        try {
            
            const ubicacion = await Ubicacion.find().count();
            res.json(ubicacion)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerubicacion = async(req:any,res:Response ) => {
        const { id } = req.params;
        const ubicacion = await Ubicacion.find({activo:true,$or:[{'descripcion': {'$regex': id,'$options': 'i'}},{'id_ubicacion': {'$regex': id,'$options': 'i'}}]}).sort({descripcion:1}).limit(10);
        res.json( ubicacion );
        console.log('Registro encontrado');
    }
    actualizarubicacion = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.id_ubicacion = data.id_ubicacion.toUpperCase();
        data.descripcion=data.descripcion.toUpperCase();
        
    
        const prod = await Ubicacion.findByIdAndUpdate( id , data, {new:true});
    
        if(prod){
            res.json({
                prod
            })
        }   
    
    }
    borrarubicacion= async(req:Request,res:Response) =>{
       
        try {
            let ubi = await Ubicacion.findById(req.params.id);
    
            if(!ubi) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await Ubicacion.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'ubicacion eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  

}
export default new ubicacion();