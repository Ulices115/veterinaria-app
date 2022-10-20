import { model, Schema, Document } from 'mongoose';
interface Icodigo extends Document{
    c_codigoPostal:number;
    c_Estado: string;
    c_Municipio: number;
    c_Localidad: number;
    Estímulo_Franja_Fronteriza: number;
    Fecha_inicio_vigencia :string;
    Fecha_fin_vigencia:string;
    Descripción_del_uso_Horario:string;
    Mes_Inicio_Horario_Verano:string;
    Día_Inicio_Horario_Verano:string;
    Diferencia_Horaria_Verano:string;
    Mes_Inicio_Horario_Invierno:string;
    Día_Inicio_Horario_Invierno:string;
    Diferencia_Horaria_Invierno:string;
  }
const CodigopSchema = new Schema<Icodigo>({
    c_codigoPostal: {
        type:Number,
        required: [true, 'es requerido']
    },
    c_Estado: {
        type: String,
        required: [true, 'es obligatorio']
    },
    c_Municipio: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    c_Localidad: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    Estímulo_Franja_Fronteriza: {
        type: Number,
        required: [true, 'es obligatorio']
    },
    Fecha_inicio_vigencia : {
        type: String,
        required: [true, 'es obligatorio']
    },
    Fecha_fin_vigencia : {
        type: String,
        required: [true, 'es obligatorio']
    },
    Descripción_del_uso_Horario: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Mes_Inicio_Horario_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Dia_Inicio_Horario_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Diferencia_Horaria_Verano: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Mes_Inicio_Horario_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Día_Inicio_Horario_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
    Diferencia_Horaria_Invierno: {
        type: String,
        required: [true, 'es obligatorio']
    },
    
    
})
CodigopSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Codigop', CodigopSchema);