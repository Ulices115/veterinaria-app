import { Response,Request} from "express"
import { ClientSession } from "mongoose";
const ObjectId = require('mongoose').Types.ObjectId;

const Ordendetalle = require("../models/ordencompradetalle");
export class ordenD{
     crearordenD = async ( req:any,res:Response) => {
        const session: ClientSession = await Ordendetalle.startSession();
        session.startTransaction();
        const id_orden = req.query.id
        const producto= req.body.producto
        const cantidad= req.body.cantidad
        const costo= req.body.costo
        const importe=req.body.importe
       
    
        console.log(id_orden)
    
        const data = {
          id_orden,
          producto,
          cantidad,
          costo,
          importe
        }
        try {

            console.log(data)    
            const ordend = await new Ordendetalle(data);
            await ordend.save();
            console.log('Registro agregado');
            res.status(200).json(data);

             await session.commitTransaction();
        } catch (error) {

             session.abortTransaction();
             session.endSession();

            throw error;
        } finally {

            session.endSession();
        }

    }
    
 obtenerordenesD = async ( req:any,res:Response) => {
        try {
    
            const ordend = await Ordendetalle.find();
            res.json(ordend)
          
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
    obtenerordenD = async( req:any,res:Response) => {
        const { id } = req.params;
        // const ordend = await Ordendetalle.find({activo:true,"id_orden":id.toUpperCase()});
        const ordend= await Ordendetalle.aggregate([{$match:{"id_orden":id.toUpperCase()}},
            { "$lookup": {
                from: "productos_servicios",
                foreignField: "id_prod_serv",
                localField: "producto",
                as: "productos_servicios"
              }},
              { $unwind: "$productos_servicios"},
              { $match: {activo:true}} ])
        res.json( ordend);
        console.log('Registro encontrado');
    }
    borrarordenD = async( req:any,res:Response) =>{
        try {
            let ordend = await Ordendetalle.find({"id_orden":req.params.id });
    
            if(!ordend) {
                res.status(404).json({ msg: 'No existe la orden' })
            }
           if( ObjectId.isValid(req.params.id)){
             await Ordendetalle.findOneAndRemove({ _id: req.params.id })
            
            res.json({ msg: 'Ordendetalle eliminado con exito' });
           }else{
                  await Ordendetalle.updateMany({"id_orden":req.params.id },{activo:false},{new:true})
                res.json({ msg: 'ordendetalle cancelado con exito' });
              
           }
            // await Pedidodetalle.findOneAndRemove({ _id: req.params.id })
           
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    }
 
    

}

export default new ordenD();