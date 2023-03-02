import { Response,Request} from "express"
const Productos_servicios = require("../models/productos_servicios");
export class producto_servicio{
    crearprod_serv = async ( req:any,res:Response) => {
        const descripcion= req.body.descripcion.toUpperCase() 
        const id_prod_serv = req.body.id_prod_serv
        const codigo_barra=req.body.codigo_barra
        const tipo = req.body.tipo
        const clave_prod_serv=req.body.clave_prod_serv
        const clave_unidad=req.body.clave_unidad
        const unidad=req.body.unidad
        const objeto_imp=req.body.objeto_imp
        const impuesto=req.body.impuesto
        const tipo_factor=req.body.tipo_factor
        const tasa_cuota=req.body.tasa_cuota
         
        console.log(id_prod_serv)
        const productoDB = await Productos_servicios.findOne({id_prod_serv});
        if(productoDB){
            return res.status(400).json({
                msg: `el producto ${id_prod_serv} ya existe`
            })
        } 
    
        const data = {
         id_prod_serv,
          descripcion,
          codigo_barra,
          tipo,
          clave_prod_serv,
          clave_unidad,
          unidad,
          objeto_imp,
          impuesto,
          tipo_factor,
          tasa_cuota
        }
    
        console.log(data)    
        const producto_servicio = await new Productos_servicios(data);
        await producto_servicio.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerprod_servs = async (req:any,res:Response ) => {
        try {
    
            const producto_servicio = await Productos_servicios.find().count();
            res.json(producto_servicio)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerprod_serv = async(req:any,res:Response ) => {
        const { id } = req.params;
        var {tipo} = req.query
        console.log('tipo',tipo);
        const producto_servicio = await Productos_servicios.find({activo:true,$and:[{$or:[{'descripcion': {'$regex':`^${id}`,'$options': 'i'}},{'codigo_barra': {'$regex':`^${id}`,'$options': 'i'}}]},{'tipo':tipo}]}).limit(10);
        res.json( producto_servicio );
        console.log('Registro encontrado');
    }
    actualizarprod_serv = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        // data.id_prod_serv = data.id_prod_serv.toUpperCase();
         data.descripcion=data.descripcion.toUpperCase();
        // data.codigo_barra=data.codigo_barra
        // data.tipo=data.tipo
        
    
        const prod = await Productos_servicios.findByIdAndUpdate( id , data, {new:true});
    
        if(prod){
            res.json({
                prod
            })
        }   
    
    }
    borrarprod_serv= async(req:Request,res:Response) =>{
       
        try {
            let producto_servicio = await Productos_servicios.findById(req.params.id);
    
            if(!producto_servicio) {
                res.status(404).json({ msg: 'No existe el servicio/producto' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await Productos_servicios.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'Producto/servicio eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  

}
export default new producto_servicio();