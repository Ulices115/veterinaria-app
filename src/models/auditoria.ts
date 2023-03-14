import { model, Schema, Document } from 'mongoose';
interface Iauditoria extends Document{
    id_inventario:string;
    fecha:Date;
    usuario: string;
    razon:string;
    tipo_ajuste:string;
    valor_anterior:number;
    nuevo_valor:number;
  }
const AuditoriaSchema = new Schema<Iauditoria>({
    id_inventario: {
        type: String,
        required: [true, 'id_inventario obligatorio'],
     
    },
    id_usuario: {
        type: String,
        required: [true, 'id_usuario obligatorio'],
     
    },
    usuario: {
        type: String,
        required: [true, 'usuario obligatorio'],
     
    },
    fecha: {
        type: Date,
        required: [true, 'fecha obligatorio'],
     
    },
    razon: {
        type: String,
        required: [true, 'razon obligatorio'],
     
    },
    tipo_ajuste: {
        type: String,
        required: [true, 'tipo de ajuste obligatorio'],
     
    },
    valor_anterior: {
        type: Number,
        required: [true, 'valor anterior obligatorio'],
     
    },
    nuevo_valor: {
        type: Number,
        required: [true, 'nuevo valor obligatorio'],
     
    },
})

AuditoriaSchema.methods.toJSON = function(){
    const { __v ,...data } = this.toObject();
    return data;
}

module.exports = model('Auditoria', AuditoriaSchema);