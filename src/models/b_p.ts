// const { Schema, model} = require('mongoose');
import { Schema,  model, Document } from "mongoose";
interface Ib_p extends Document{
    nombre: string;
    rfc: string;
    calle: string;
    numero_ext: string;
    numero_int: string;
    colonia: string;
    id_municipio: string;
    id_poblacion: string;
    id_estado: string;
    id_pais: string;
    codigoP: number;
    regimen_fiscal:string;
    clave_usof:string;
    correo:string;
    numero_cel:number;
    metodo_pago:string;
    condicion_pago:string;
    forma_pago:string;
    activo:Boolean;
  }
const B_pSchema = new Schema<Ib_p>({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        // unique: false
    },
    rfc: {
        type: String,
        required: [true, 'el rfc es obligatorio']
    },
    id_b_p: {
        type: String,
        required: [true, 'el numero de cliente es obligatorio'],
        unique:true,
    },
    calle:{
        type: String,
        required: [true, 'la calle es obligatorio']
    },
    numero_ext:{
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    numero_int:{
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    colonia:{
        type: String,
        // required: [true, 'El id es obligatorio']
    },
    id_municipio:{
        type: String,
        // required: [true, 'El municipio es obligatorio']
    },
    id_poblacion:{
        type: String,
        // required: [true, 'La poblacion es obligatorio']
    },
    id_estado:{
        type: String,
        required: [true, 'El estado es obligatorio']
    },
    id_pais:{
        type: String,
        required: [true, 'El pais es obligatorio']
    },
    codigoP:{
        type: Number,
        required: [true, 'El codigo postal es obligatorio']
    },
    regimen_fiscal:{
        type: String,
        required: [true, 'El regimen fiscal es obligatorio']
    },
    clave_usof:{
        type: String,
        required: [true, 'El clave de uso fiscal es obligatorio']
    },
    correo:{
        type: String,
        required: [true, 'correo es obligatorio']
    },
    numero_cel:{
        type: Number,
        required: [true, 'numero es obligatorio']
    },
    metodo_pago:{
        type: String,
        required: [true, 'metodo pago es obligatorio']
    },
    condicion_pago:{
        type: String,
        required: [true, 'condicion pago es obligatorio']
    },
    forma_pago:{
        type: String,
        required: [true, 'forma pago es obligatorio']
    },
    activo: {
        type: Boolean,
        default:true
    }
})

B_pSchema.methods.toJSON = function(){
    const { __v,...data } = this.toObject();
    return data;
}

module.exports = model('b_p', B_pSchema);