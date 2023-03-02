import { Response,Request} from "express"
const movimientos = require("../models/movimientos_inv");
export class movimiento_inv{
    movimiento = async ( req:any,res:Response) => {
        const referencia= req.body.referencia.toUpperCase() 
        const ubicacion = req.body.ubicacion.toUpperCase()
        const fecha=req.body.fecha
        const tipo=req.body.tipo
        const tipo_ajuste=req.body.tipo_ajuste
        const cantidad_inicial=req.body.cantidad_inicial
        const cantidad_final=req.body.cantidad_final

        const data = {
          referencia,
          ubicacion,
          fecha,
          tipo,
          tipo_ajuste,
          cantidad_inicial,
          cantidad_final
        }
        console.log('movimiento_inv creada');
        // console.log(data)    
        const movimiento = await new movimientos(data);
        await movimiento.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    
}
export default new movimiento_inv();