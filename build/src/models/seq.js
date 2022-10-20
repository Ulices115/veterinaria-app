"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Schema, model} = require('mongoose');
const mongoose_1 = require("mongoose");
const SeqDMSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    seq: {
        type: Number
    }
});
module.exports = (0, mongoose_1.model)('SeqDM', SeqDMSchema);
