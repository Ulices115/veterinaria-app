import { Request,Response,NextFunction } from 'express';
const jwt = require('jsonwebtoken');
const Usuario1 = require('../models/usuario');

export class validarjwt{
  validarJWT = async (req:any, res:Response, next:NextFunction) => {
        const token = req.header('x-token');     
        if(!token){
            return res.status(401).json({
                msg: 'No hay token en la peticion'
            });
        }
    
        try {
            const { uid } = jwt.verify( token, process.env.JWT_KEY );
            
    
            // req.uid = uid;
            const usuario = await Usuario1.findById(uid);
            
    
            if(!usuario){
                return res.status(401).json({
                    msg: 'token no valido -no existe'
                })
            }
    
            if( !usuario.estado){
                return res.status(401).json({
                    msg: 'token no valido -usuario baja'
                })
            }
    
            req.usuario = usuario;
    
            // console.log(req.usuario);
    
            next();
    
        } catch (error) {
           
            res.status(401).json({
                msg:'Token no valido'
                
            })
            console.log(error);
            
        }
    }
}

export default new validarjwt();