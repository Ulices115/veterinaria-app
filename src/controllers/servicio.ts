import { Response,Request} from "express"
const Servicio = require("../models/servicio");
export class servicio{
   crearservicio = async ( req:any,res:Response) => {
        const descripcion= req.body.descripcion
        const id_servicio = req.body.id_servicio.toUpperCase();
       
    
        console.log(id_servicio)
        const servicioDB = await Servicio.findOne({ id_servicio });
        if(servicioDB){
            return res.status(400).json({
                msg: `el id_servicio ${id_servicio} ya existe`
            })
        } 
    
        const data = {
           descripcion,
           id_servicio,
            
        }
    
        console.log(data)    
        const servicio = await new Servicio(data);
        await servicio.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    
     obtenerservicios = async (req:any,res:Response ) => {
        // const { limite = 5, desde = 0 } = req.query;
        // const query = { activo: true }    
        // const [total,servicios] = await Promise.all([
        //     Servicio.countDocuments(query),
        //     Servicio.find(query)
        //     // .populate('_id')
        //     .skip(Number(desde))
        //     .limit(Number(limite))
        // ]);
        
        // res.json({
        //     total,
        //     servicios
        // });
    
        // otra forma
    
        try {
    
            const servicios = await Servicio.find().count();
            res.json(servicios)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerservicio = async(req:any,res:Response ) => {
        const { id } = req.params;
        console.log(id);
        
        const servicio = await Servicio.find({activo:true,'descripcion': {'$regex': id,'$options': 'i'}}).sort({descripcion:1}).limit(10);
        res.json( servicio );
        console.log('Registro encontrado');
    }
    
    borrarservicio= async(req:Request,res:Response) =>{
       
        try {
            let servi = await Servicio.findById(req.params.id);
    
            if(!servi) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
            await Servicio.findByIdAndUpdate(req.params.id ,{activo:false},{new:true})
            // await Servicio.findOneAndRemove({ _id: req.params.id })
            res.json({ msg: 'servicio eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }   
    actualizarservicio = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.id_servicio = data.id_servicio.toUpperCase();
        data.descripcion=data.descripcion;
        
    
        const servi = await Servicio.findByIdAndUpdate( id , data, {new:true});
    
        if(servi){
            res.json({
                servi
            })
        }   
    
    }
}

export default new servicio();