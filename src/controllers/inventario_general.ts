import { Response,Request} from "express"
const inventario_general = require("../models/inventario_general");
export class Inventario{
    crearinventario = async ( req:any,res:Response) => {
        const id_inventario=req.body.id_inventario
        const id_prod_serv = req.body.id_prod_serv
        const precio=req.body.precio
        const cantidad=req.body.cantidad
        const ubicacion=req.body.ubicacion
        const costo=req.body.costo
        const tipo=req.body.tipo
     

        const inventarioDB = await inventario_general.findOne({id_inventario });
        if(inventarioDB){
            return res.status(400).json({
                msg: `el inventario ${id_inventario} ya existe`
            })
        } 
    
        const data = {
          id_inventario,
          id_prod_serv,
          precio,
          cantidad,
          ubicacion,
          costo,
          tipo
        }
    
        console.log(data)    
        const inventario = await new inventario_general(data);
        await inventario.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerinventarios = async (req:any,res:Response ) => {
        try {
             const inventario = await inventario_general.find().count();
            res.json(inventario)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    obtenerinventario = async(req:any,res:Response ) => {
        var { id} = req.params;
        var {ubi,tipo,consulta} = req.query   
        console.log(consulta);
        
        if(tipo!==''){
            if(consulta!==''){
                const inventario = await inventario_general.aggregate([
                    { "$lookup": {
                        from: "ubicacions",
                        foreignField: "id_ubicacion",
                        localField: "ubicacion",
                        as: "ubicacion"
                      }},
                      { $unwind: "$ubicacion"},
                    { "$lookup": {
                        from: "productos_servicios",
                        foreignField: "id_prod_serv",
                        localField: "id_prod_serv",
                        as: "productos_servicios"
                      }},
                      { $unwind: "$productos_servicios"}, 
                      { $match: {$and:[{'tipo':tipo},{$or:[{'productos_servicios.descripcion': {'$regex': `^${id}`,'$options': 'i'}},{'productos_servicios.codigo_barra': {'$regex': `^${id}`,'$options': 'i'}}]}]}},
                      { $match: {activo:true}},
                ]).sort({'productos_servicios.descripcion':1}).limit(10);
        
                res.json( inventario );
                console.log('Registro encontrados en consulta');  
            }else{
                const inventario = await inventario_general.aggregate([
                    { "$lookup": {
                        from: "ubicacions",
                        foreignField: "id_ubicacion",
                        localField: "ubicacion",
                        as: "ubicacion"
                      }},
                      { $unwind: "$ubicacion"},
                    { $match: {'ubicacion.id_ubicacion': ubi}},
                    { "$lookup": {
                        from: "productos_servicios",
                        foreignField: "id_prod_serv",
                        localField: "id_prod_serv",
                        as: "productos_servicios"
                      }},
                      { $unwind: "$productos_servicios"}, 
                      { $match: {$and:[{'tipo':tipo},{$or:[{'productos_servicios.descripcion': {'$regex': `^${id}`,'$options': 'i'}},{'productos_servicios.codigo_barra': {'$regex': `^${id}`,'$options': 'i'}}]}]}},
                      { $match: {activo:true}},
                ]).sort({'productos_servicios.descripcion':1}).limit(10);
        
                res.json( inventario );
                console.log('Registro encontrado baja-ajuste-orden');  
            }
           
        }
        if(tipo==''){
            const inventario = await inventario_general.aggregate([
                { "$lookup": {
                    from: "ubicacions",
                    foreignField: "id_ubicacion",
                    localField: "ubicacion",
                    as: "ubicacion"
                  }},
                  { $unwind: "$ubicacion"},
                { $match: {'ubicacion.id_ubicacion': ubi}},
                { "$lookup": {
                    from: "productos_servicios",
                    foreignField: "id_prod_serv",
                    localField: "id_prod_serv",
                    as: "productos_servicios"
                  }},
                  { $unwind: "$productos_servicios"}, 
                  { $match: {$or:[{'productos_servicios.descripcion': {'$regex': `^${id}`,'$options': 'i'}},{'productos_servicios.codigo_barra': {'$regex': `^${id}`,'$options': 'i'}}]}},
                //   { $match: {'productos_servicios.codigo_barra': {'$regex': `^${id}`,'$options': 'i'}}},
                  { $match: {activo:true}},
            ]).sort({'productos_servicios.descripcion':1}).limit(10);
    
            res.json( inventario );
            console.log('Registro encontrado pedido');  
        }

    }
    
    actualizarinventario = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.id_prod_serv = data.id_prod_serv.toUpperCase();
        data.id_inventario=data.id_inventario;
        data.precio=data.precio;
        data.costo=data.costo;
        // data.cantidad=data.cantidad;
        data.ubicacion=data.ubicacion;
        data.tipo=data.tipo;
        
    
        const inventario = await inventario_general.findByIdAndUpdate( id , data, {new:true});
    
        if(inventario){
            res.json({
                prod: inventario
            })
        }   
    
    }
    borrarinventario= async(req:Request,res:Response) =>{
       
        try {
            let inventario = await inventario_general.findById(req.params.id);
    
            if(!inventario) {
                res.status(404).json({ msg: 'No existe el servicio' })
            }
           
            // await Producto.findOneAndRemove({ _id: req.params.id })
            await inventario_general.findByIdAndUpdate({_id:req.params.id},{activo:false})
            res.json({ msg: 'Producto eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }  
    
}
export default new Inventario();