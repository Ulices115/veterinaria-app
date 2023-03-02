import { Response,Request} from "express"
const Factura = require("../models/factura");
export class factura{
    crearfactura = async ( req:any,res:Response) => {
        const id_factura= req.body.id_factura.toUpperCase() 
        const id_pedido = req.body.id_pedido.toUpperCase()
        const xml=req.body.xml
        const pdf=req.body.pdf
        console.log(id_factura)
        const facturaDB = await Factura.findOne({ id_factura });
        if(facturaDB){
            return res.status(400).json({
                msg: `la factura ${id_factura} ya existe`
            })
        } 
    
        const data = {
          id_factura,
          id_pedido,
          xml,
          pdf
        }
        console.log('factura creada');
        // console.log(data)    
        const factura = await new Factura(data);
        await factura.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
        
    obtenerfacturas = async ( req:Request,res:Response) => {
        try {
    
            const factura = await Factura.find().count();
            res.json(factura)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }
            
    obtenerfactura = async ( req:Request,res:Response) => {
        const { id } = req.params;
        try {
    
            const factura = await Factura.find({'id_pedido':id});
            res.json(factura)
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    }


}
export default new factura();