import { model, Schema, Document } from 'mongoose';
interface Iregimen extends Document{
    id_r: string;
    descripcion: string;
    fisica: string;
    moral:string;
    fecha_ini_vigencia:string;    
    fecha_fin_vigencia:string;
  }
const RegimenSchema = new Schema<Iregimen>({
    id_r: {
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
     
    }
 
 
}) 

RegimenSchema.methods.toJSON = function(){
    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Regimen Fiscal', RegimenSchema);