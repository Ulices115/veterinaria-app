const { validationResult } = require('express-validator');
import {Request,Response,NextFunction} from 'express'
export class validarcampos{
    validarCampos = ( req:Request, res:Response, next:NextFunction ) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors});
    }
    next();
}

}


export default new validarcampos();