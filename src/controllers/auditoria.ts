import { Response,Request} from "express"
const Auditoria = require("../models/auditoria");
export class auditoria{
    auditorias = async ( req:any,res:Response) => {
        const id_inventario= req.body.id_inventario.toUpperCase() 
        const id_usuario = req.body.id_usuario
        const usuario = req.body.usuario.toUpperCase()
        const fecha=req.body.fecha
        const razon=req.body.razon
        const tipo_ajuste=req.body.tipo_ajuste
        const valor_anterior=req.body.valor_anterior
        const nuevo_valor=req.body.nuevo_valor
    
        // const auditoriaDB = await Auditoria.findOne({ });
        // if(auditoriaDB){
        //     return res.status(400).json({
        //         msg: `el pedido ${} ya existe`
        //     })
        // } 
    
        const data = {
          id_inventario,
          id_usuario,
          usuario,
          fecha,
          razon,
          tipo_ajuste,
          valor_anterior,
          nuevo_valor
        }
        
        console.log('auditoria creada');
        // console.log(data)    
        const auditoria = await new Auditoria(data);
        await auditoria.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    obtenerauditorias= async ( req:Request,res:Response) => {
        try {
    
            const auditoria = await Auditoria.find();
            res.json(auditoria)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
    
}
export default new auditoria();