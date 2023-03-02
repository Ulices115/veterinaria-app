const { compareSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');

export const generarJWT = ( uid = '' ) => {

    return new Promise( (resolve,reject) => {
        const payload = { uid };
        //jwt.sign(payload,process.env.SECRETORPRIVATEKEY, {
        jwt.sign(payload,process.env.JWT_KEY, {
            expiresIn:'8h'
        }, (err:any,token:any) =>{
            if(err) {
                reject('Nose pudo generar el jwt');
                console.log(err);
            } else {
                resolve(token);
            }
        });
    })
}

module.exports = {
    generarJWT
}