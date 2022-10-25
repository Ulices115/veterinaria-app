import { model, Schema, Document } from 'mongoose';
interface Imovimientos extends Document{
    referencia:string;
    fecha:Date;
    ubicacion: string;
    tipo:string;
    tipo_ajuste:string;
    cantidad_inicial:number;
    cantidad_final:number;
  }
const MovimientoSchema = new Schema<Imovimientos>({
    referencia: {
        type: String,
        required: [true, 'referencia obligatorio'],
     
    },
    ubicacion: {
        type: String,
        required: [true, 'ubicacion oligatorio'],
     
    },
    fecha: {
        type: Date,
        required: [true, 'fecha obligatorio'],
     
    },
    tipo: {
        type: String,
        required: [true, 'tipo obligatorio'],
     
    },
    tipo_ajuste: {
        type: String,
        required: [true, 'tipo de ajuste obligatorio'],
     
    },
    cantidad_inicial: {
        type: Number,
        required: [true, 'cantidad inicial obligatorio'],
     
    },
    cantidad_final: {
        type: Number,
        required: [true, 'cantidad final obligatorio'],
     
    },
})

MovimientoSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Movimientos', MovimientoSchema);