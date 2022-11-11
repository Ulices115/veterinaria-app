import{ Response } from 'express'
const  Usuario  = require('../models/usuario');
const bcriptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');
export class login{
 login = async(req:any, res:Response) => {
        const { correo, password } = req.body;
        // console.log(password);
        
        try {
            const usuario = await Usuario.findOne({ correo });
            if( !usuario ){
                return res.status(400).json({
                    msg:'Usuario/Password no son correctos--correo'
                })
            }
            // if( usuario.rol!=='ADMIN_ROLE'){
            //     throw new Error(`El rol no valido`).message
                
            // }
    
            if( !usuario.estado ){
                return res.status(400).json({
                    msg:'Usuario/Password no son correctos--estado:falso'
                })
            }
            
            const validPassword = bcriptjs.compareSync(password,usuario.password); 
            
            if ( !validPassword){
                return res.status(400).json({
                    msg:'Usuario/Password no son correctos--password'
                })
            }
    
            const token = await generarJWT( usuario.id );       
            res.json({
                usuario,
                token,
            })
            console.log('Sesion iniciada por:',usuario.nombre);
            
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg:'Algo salio mal con el login'
            })
        }
    }
    
 revalidarToken = async(req:any, res:Response)=>{
  
        const token = await generarJWT( req.usuario.id )
        const usuario = req.usuario;
        return res.status(200).json({usuario,token})
        
    }
}
export default new login();


