// const { response } = require('express');
import {Request,Response,} from "express";
export class validarRoles{
   esAdminRol = (req:any, res:Response, next:any) => {
    if( !req.usuario ){
        return res.status(500).json({
            msg: 'Se quiere validar el rol sin tener el token'
        })
    }

    const { rol, nombre } = req.usuario;

    if( rol !== 'ADMIN_ROLE' ) {
        return res.status(401).json({
            msg: `${ nombre } no es administrador `
        })
    }

    next();
}

 tienRol = ( ...roles:any ) => {

    return ( req:any, res:any, next:any) =>{

        if( !req.usuario ){
            return res.status(500).json({
                msg: 'Se quiere validar el rol sin tener el token'
            })
        }

        if( !roles.includes(req.usuario.rol)){
            return res.status(401).json({
                msg: `El servicio requiere los siguientes roles: ${roles}`
            })
        }
        console.log(roles, req.usuario.rol);
        next();
    }

}
}


export default new validarRoles();