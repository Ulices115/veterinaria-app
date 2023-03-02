"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarJWT = void 0;
const { compareSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        //jwt.sign(payload,process.env.SECRETORPRIVATEKEY, {
        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '8h'
        }, (err, token) => {
            if (err) {
                reject('Nose pudo generar el jwt');
                console.log(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
module.exports = {
    generarJWT: exports.generarJWT
};
