"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const SeqDM = require("../models/seq");
const nextSeq = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { name: name };
    const update = {};
    update['$inc'] = {};
    update['$inc']['seq'] = 1;
    var ret = yield SeqDM.findOneAndUpdate(filter, update, { new: true });
    return ret;
});
const formatId = (num, long) => {
    while (num.length < long)
        num = '0' + num;
    return num;
};
module.exports = {
    nextSeq,
    formatId
};
