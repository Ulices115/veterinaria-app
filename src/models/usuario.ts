// // const { Schema, model} = require('mongoose');
// import { Schema,  model } from "mongoose";
// // const { Role } = require('.');
// // const rol = require('./rol');
import { model, Schema, Document } from 'mongoose';
interface IUser extends Document{
    nombre: string;
    password: string;
    correo: string;
    rol: string;
    imagen: string;
    estado: Boolean;
    google: Boolean;
  }
const UsuarioSchema = new Schema<IUser>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatoio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatoio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    numero_cel: {
        type: Number,
        required: [true, 'El numero es obligatoria']
    },
    // imagen: {
    //     type: String,
    // },
    // rol: {
    //     type: String,
    //     required:true,
    //     enum: ['ADMIN_ROLE', 'USER_ROLE']
        
    // },
    estado: {
        type: Boolean,
        default: true
    },
    ubicacion:{
        type:String,
       
    },
    transacciones:{
        type:Array,
        default:[]
    },
    ubicaciones:{
        type:Array,
        default:[]
    },
    // google: {
    //     img: Boolean,
    //     default: false
    // }
})

UsuarioSchema.methods.toJSON = function(){
    const { __v,...usuario } = this.toObject();
    // usuario.uid = _id
    return usuario;
}


module.exports = model('Usuario', UsuarioSchema);