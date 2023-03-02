import { Response,Request} from "express"
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
export class usuarios{
    usuariosGet = async (req:any,res:Response)=>{
        const { limite = 5, desde = 0 } = req.query;
        const query = { estado: true }    
        const [ total, usuarios ] = await Promise.all([
            Usuario.countDocuments(query),
            Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
        ]);
        
        res.json({
            total,
            usuarios
        });
    
    } //agregado
    usuarioget = async( req:any,res:Response ) => {
        const { id } = req.params;
        var {tipo} = req.query
        console.log(tipo);
        if(tipo=='activacion'){
            const usuario = await Usuario.find({estado:false, "nombre": {'$regex': `^${id}`,'$options': 'i'}})
            res.json( usuario );
     
            console.log('modulo activacion de usuario');
        }if(tipo==''){
             // const usuario = await Usuario.findById(id).populate('nombre');
        // const usuario = await Usuario.find({estado:true,$or:[{'ubicacion':id},{ "nombre": {'$regex': `^${id}`,'$options': 'i'}},{ "ubicaciones": {'$regex': `^${id}`,'$options': 'i'}}]})
         const usuario = await Usuario.aggregate([
            { "$lookup": {
                from: "ubicacions",
                foreignField: "id_ubicacion",
                localField: "ubicaciones",
                as: "Descripcion"
              }},
              { $unwind: "$Descripcion"}, 
              { $match: {$or:[{'ubicacion':id},{ "nombre": {'$regex': `^${id}`,'$options': 'i'}},{ "ubicaciones": {'$regex': `^${id}`,'$options': 'i'}},{'Descripcion.descripcion': {'$regex': `^${id}`,'$options': 'i'}}]}},
            //   { $match: },
              { $match: {estado:true}},
        ])
        res.json( usuario );
     
        console.log('usuarios activos-ubicacion');
        }if(tipo=='activo'){
            // const usuario = await Usuario.findById(id).populate('nombre');
       const usuario = await Usuario.find({estado:true,$or:[{'ubicacion':id},{ "nombre": {'$regex': `^${id}`,'$options': 'i'}},{ "ubicaciones": {'$regex': `^${id}`,'$options': 'i'}}]})
       res.json( usuario );
    
        console.log('usuarios activos');
       }
       
    }
    
     usuariosPut = async(req:any,res:Response)=>{
        const { id } = req.params;
        const {_id, password, google, ...resto } = req.body;
        var {tipo} = req.query
        if(tipo=='activacion'){
            
        const usuario = await Usuario.findByIdAndUpdate( id, resto );
            
        res.json({
            msg:'Actualizado',
            usuario
        })
        console.log('actualizar estado');
        
        }if(tipo==''){
        if( password ) {    
            const salt = bcryptjs.genSaltSync();
            resto.password = bcryptjs.hashSync(password, salt);    
        }
        
        const usuario = await Usuario.findByIdAndUpdate( id, resto );
            
        res.json({
            msg:'Actualizado',
            usuario
        })
        console.log('actualizacion');
        
        }
        
    }
    
    usuariosPost = async (req:any,res:Response)=>{
    
        const {nombre, correo, password,numero_cel,ubicacion,transacciones,ubicaciones} = req.body;
        // const ubicacion = req.body.ubicacion.toUpperCase();
        const usuario = new Usuario({nombre, correo,numero_cel ,password,ubicacion,transacciones,ubicaciones});
        
        const salt = bcryptjs.genSaltSync();
    
        usuario.password = bcryptjs.hashSync(password, salt);
    
        await usuario.save();
        
        res.json({
            usuario
        })
    }
    
    usuariosDelete = async (req:any,res:Response)=>{
        const { id,estado } = req.params;
        const usuario = await Usuario.findById(id,estado);
        if(usuario.estado==true){
                 //const { id } = req.params;
    
                const usuario = await Usuario.findByIdAndUpdate( id, { estado: false } );
                const usuarioAutenticado = req.usuario;
                console.log(req.usuario);
                
                res.json({
                    usuario,
                    usuarioAutenticado
                })
                // console.log('El usuario: '+ usuario.nombre +' fue eliminado/inhabilitado '+ 'por '+ usuarioAutenticado.nombre);
        } else{
            res.json({
                       msg:'El usuario no existe o ya fue eliminado'
                 })
                 //console.log(usuario.estado);
        }
       
    }
    
     usuariosPatch = (req:any,res:Response)=>{
        res.json({
            msg:'Patch'
        })
    }
}

export default new usuarios();




