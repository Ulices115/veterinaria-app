import { model, Schema, Document } from 'mongoose';
interface Iclaveusof extends Document{
    id_cfdi: string;
    descripcion: string;
    fisica: string;
    moral:string;
    fecha_ini_vigencia:string;    
    fecha_fin_vigencia:string;
    regimen_fiscal_receptor:string[];
  }
const claveSchema = new Schema<Iclaveusof>({
    id_cfdi: {
        type: String,
        require: [true, 'El id_r  es obligatorio'],
        unique: true    
    },
    descripcion: {
        type: String,
        require: [true, 'la descripcion es obligatorio'],
       
    },
    fisica: {
        type: String,
        require: [true, 'fisica es obligatorio'],
    
    },
    moral: {
        type: String,
        require: [true, 'moral es obligatorio'],
      
    },
    fecha_ini_vigencia: {
        type: String,
        require: [true, 'fecha de inicio es obligatorio'],
  
    },
    fecha_fin_vigencia: {
        type: String,
        require: [true, 'fecha de fin es obligatorio'],
     
    },
    regimen_fiscal_receptor: {
        type: String,
        require: [true, 'receptor es obligatorio'],
     
    }
 
 
}) 

claveSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('clave uso fiscal', claveSchema);