import { Response,Request} from "express"
const Producto = require("../models/producto");
export class producto{
    crearproducto = async ( req:any,res:Response) => {
        const descripcion= req.body.descripcion.toUpperCase() 
        const id_producto = req.body.id_producto
        const codigo_barra=req.body.codigo_barra
         
        console.log(id_producto)
        const productoDB = await Producto.findOne({id_producto });
        if(productoDB){
            return res.status(400).json({
                msg: `el producto ${id_producto} ya existe`
            })
        } 
    
        const data = {
         id_producto,
          descripcion,
          codigo_barra
        }
    
        console.log(data)    
        const producto = await new Producto(data);
        await producto.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerproductos = async (req:any,res:Response ) => {
        try {
    
            const producto = await Producto.find().count();
            res.json(producto)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerproducto = async(req:any,res:Response ) => {
        const { id } = req.params;
         const producto = await Producto.find({activo:true,'descripcion': {'$regex':`^${id}`,'$options': 'i'}}).limit(10);
        res.json( producto );
        console.log('Registro encontrado');
    }
    actualizarproducto = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.id_producto = data.id_producto.toUpperCase();
        data.descripcion=data.descripcion.toUpperCase();
        data.codigo_barra=data.codigo_barra
        
    
        const prod = await Producto.findByIdAndUpdate( id , data, {new:true});
    
        if(prod){
            res.json({
                prod
            })
        }   
    
    }
    borrarproducto= async(req:Request,res:Response) =>{
       
        try {
            let produc = await Producto.findById(req.params.id);
    
            if(!produc) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await Producto.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'Producto eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  

}
export default new producto();