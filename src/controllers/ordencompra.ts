import { Response,Request} from "express"
import { ClientSession } from "mongoose";
const Ordendetalle = require("../models/ordencompradetalle");
const Orden = require("../models/ordencompra");
const inventario_general = require("../models/inventario_general");
const movimientos = require("../models/movimientos_inv");
export class orden{
     crearorden = async ( req:any,res:Response) => {
        const session: ClientSession = await Orden.startSession();
        session.startTransaction();
        const rfc= req.body.rfc.toUpperCase() 
        const id_orden = req.body.id_orden
        const id_b_p = req.body.id_b_p
        const fecha=req.body.fecha
        const ubicacion=req.body.ubicacion
     
       
    
        console.log(id_orden)
        const ordenDB = await Orden.findOne({ id_orden });
        if(ordenDB){
            return res.status(400).json({
                msg: `la orden ${id_orden} ya existe`
            })
        } 
    
        const data = {
          id_orden,
          rfc,
          id_b_p,
          ubicacion,
          fecha
        }
        try {
            // TODO Add your statement here
            console.log(data)    
            const pedido = await new Orden(data);
            await pedido.save();
            console.log('Registro agregado');
            res.status(200).json(data);
            // Commit the changes
             await session.commitTransaction();
        } catch (error) {
            // Rollback any changes made in the database
             session.abortTransaction();
             session.endSession();
            // Rethrow the error
            throw error;
        } finally {
            // Ending the session
            session.endSession();
        }
    }
    
     obtenerordenes = async ( req:Request,res:Response) => {
    
        try {
            const orden = await Orden.find().count();
            res.json(orden)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerorden = async(req:Request,res:Response ) => {
        const { id } = req.params; 
        var {ubi} = req.query
        console.log(ubi);
        // const orden=await Orden.find({'id_orden':id})
        const orden = await Orden.find({cancelado:false,ubicacion:ubi,status:'pendiente','id_b_p': id}).sort({id_orden:1}).limit(10);
        res.json( orden);
        console.log(orden);
        
        console.log('Registro encontrado');
    }
    borrarorden = async(req:Request,res:Response) =>{
       
        try {
            let orden = await Orden.findById(req.params.id);
    
            if(!orden) {
                res.status(404).json({ msg: 'No existe la orden' })
            }
   
             await Orden.findByIdAndUpdate(req.params.id ,{cancelado:true},{new:true})
            // await Pedido.findOneAndRemove({ _id: req.params.id })
            res.json({ msg: 'Pedido eliminado con exito' });
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
    actualizarorden = async( req:any, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;  
        var {ubi} = req.query
        console.log(ubi);
        
        console.log(data.id_orden);
        const orden = await Orden.updateOne( {"id_orden":id}, data, {new:true});
        if(orden){
            res.json({
                 orden
            })
        }   
        const ordendetalle= await Ordendetalle.find({'id_orden':data.id_orden})
        console.log('ordendetalle',ordendetalle);
        for(const producto in ordendetalle){
            // console.log('producto y cantidad',ordendetalle[producto]['producto'],ordendetalle[producto]['cantidad']);
             const inventarios = await inventario_general.find({$and:[{'id_prod_serv':ordendetalle[producto]['producto']},{ubicacion:ubi}]})
             const nuevaexistencias=inventarios[0]['cantidad']+ordendetalle[producto]['cantidad']

              await inventario_general.updateOne({$and:[{id_prod_serv:ordendetalle[producto]['producto']},{ubicacion:ubi}]},{cantidad:nuevaexistencias})

              const datos = {
                referencia:data.id_orden,
                ubicacion:ubi,
                fecha:new Date,
                tipo:'Entrada',
                tipo_ajuste:'Orden de compra',
                cantidad_inicial:inventarios[0]['cantidad'],
                cantidad_final:nuevaexistencias
            }
            console.log('movimiento_inv creada');
            const movimiento = await new movimientos(datos);
            await movimiento.save();  
        }
    
    }
}
export default new orden();
