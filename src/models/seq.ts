// const { Schema, model} = require('mongoose');
import { model, Schema, Document } from 'mongoose';
interface Iseq extends Document{
    name: string;
    seq: number;
  }
const SeqDMSchema = new Schema<Iseq>({
    name: {
        type: String
    },
    seq: {
        type: Number
    }
})

module.exports = model('SeqDM', SeqDMSchema);