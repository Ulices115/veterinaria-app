import { Response,Request} from "express"
 const b_p = require("../models/b_p");
 const ObjectId = require('mongoose').Types.ObjectId;
export class B_P {
    obtenerb_ps = async ( req:Request, res:Response ) => {
        // const { limite = 5, desde = 0 } = req.query;
        // const query = { activo: true }    
        // const [total,b_p_usuario] = await Promise.all([
        //     b_p.countDocuments(query),
        //     b_p.find(query)
        //     // .populate('_id')
        //     .skip(Number(desde))
        //     .limit(Number(limite))
        // ]);
        
        // res.json({
        //     total,
        //     b_p_usuario
        // });
        // console.log('Registros encontrados');

        try {
            const pedidod = await b_p.find().count();
            res.json(pedidod)
          
            
            
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
    
        console.log('Registros encontrados');
    
    }
    
     obtenerb_p = async( req:Request, res:Response ) => {
        const { id} = req.params;
        // const b_p_usuario = await b_p.findById(id);
        // const b_p_usuario = await b_p.find({'nombre': {'$regex': id,'$options': 'i'}});
         const b_p_usuario = await b_p.find({activo:true, $or: [ { "nombre": {'$regex': id,'$options': 'i'}}, { "rfc": {'$regex': `^${id}`,'$options': 'i'}},{ "id_b_p": {'$regex': `^${id}`,'$options': 'i'}}]}).limit(10).sort({nombre:1});
        res.json( b_p_usuario );
        console.log('Registro encontrado');
    }
    
     crearb_p = async ( req:Request, res:Response ) => {
        // OTRA FORMA
    
        // try {
        //     let b_pCreate;
        //     b_pCreate=new b_p(req.body);
        //     await b_pCreate.save();
        //     console.log('registro creado');
        //     console.log(b_pCreate);
        //     res.status(200).json(b_pCreate);
            
        // } catch (error) {
        //     console.log(error);
        //     res.status(500).send("hubo un error")
        // }
    
        const nombre = req.body.nombre.toUpperCase();
        const rfc = req.body.rfc.toUpperCase();
        const id_b_p = req.body.id_b_p.toUpperCase();
        const calle = req.body.calle
        const numero_ext =req.body.numero_ext
        const numero_int=req.body.numero_int
        const colonia=req.body.colonia.toUpperCase();
        const id_municipio=req.body.id_municipio.toUpperCase();
        const id_poblacion=req.body.id_poblacion.toUpperCase();
        const id_estado=req.body.id_estado.toUpperCase();
        const id_pais=req.body.id_pais.toUpperCase();
        const codigoP=req.body.codigoP
        const regimen_fiscal=req.body.regimen_fiscal
        const clave_usof=req.body.clave_usof
        const correo=req.body.correo
        const numero_cel=req.body.numero_cel
        const metodo_pago=req.body.metodo_pago.toUpperCase();
        const forma_pago=req.body.forma_pago
        const condicion_pago=req.body.condicion_pago
        console.log(nombre)
        const b_pDB = await b_p.findOne({ nombre });
        if(b_pDB){
            return res.status(400).json({
                msg: `El cliente ${nombre} ya existe`
            })
        } 
    
        const data = {
            nombre,
            rfc,
            id_b_p,
            calle,
            numero_ext,
            numero_int,
            colonia,
            id_municipio,
            id_poblacion,
            id_estado,
            id_pais,
            codigoP,
            regimen_fiscal,
            clave_usof,
            correo,
            numero_cel,
            condicion_pago,
            metodo_pago,
            forma_pago,
        }
    
        console.log(data)    
        const b_p_usuario = await new b_p(data);
        await b_p_usuario.save();
        console.log('Registro agregado');
        res.status(200).json(data);
    }
    
     actualizarb_p = async(req:Request, res:Response ) => {
        const { id } = req.params;
        const { _id, ...data } = req.body;
    
        data.nombre = data.nombre.toUpperCase();
        data.rfc =data.rfc.toUpperCase();
        data.calle = data.calle
        data.numero_ext =data.numero_ext
        data.numero_int=data.numero_int
        data.colonia=data.colonia.toUpperCase();
        data.id_municipio=data.id_municipio.toUpperCase();
        data.id_poblacion=data.id_poblacion.toUpperCase();
        data.id_estado=data.id_estado.toUpperCase();
        data.id_pais=data.id_pais.toUpperCase();
        data.codigoP=data.codigoP
        data.regimen_fiscal=data.regimen_fiscal
        data.clave_usof=data.clave_usof
        data.correo=data.correo
        data.numero_cel=data.numero_cel
        data.metodo_pago=data.metodo_pago.toUpperCase();
        
    
        const b_p_usuario = await b_p.findByIdAndUpdate( id , data, {new:true});
        console.log('Registro actualizado');
        
        if(b_p_usuario){
            res.json({
                b_p_usuario
            })
        }   
       
        // return res.status(500).json({
        //     msg:'Actualizado'
        // })
        
       
    
    }
    
     borrarb_p = async( req:Request, res:Response ) =>{
        const { id } = req.params;
        const b_p_usuario = await b_p.findById(id);
        if(b_p_usuario.activo==true){
    
            const { id } = req.params;
            const b_p_usuario = await b_p.findByIdAndUpdate(id,{activo:false},{new:true})
            // const b_p_usuario = await b_p.findByIdAndDelete(id)
        
            console.log('Registro eliminado');
            res.status(200).json({  msg:'Eliminado',b_p_usuario});
    
        }else{
            res.json({
                       msg:'el b_p no existe o ya fue eliminado'
                 })
                
        }
    
       
    }
}

export default new B_P();


