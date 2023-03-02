// mongoose = require('mongoose');
import mongoose from 'mongoose'
const dbConection = async()=>{
    try {
        
        await mongoose.connect(process.env.MONGODB_CNN!, {
            useUnifiedTopology: true
            
        });
console.log('conectado a mongo');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion');
    }
}

module.exports = {
    dbConection
}

