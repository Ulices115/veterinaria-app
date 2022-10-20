"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require('dotenv').config();
exports.Server = require('./models/server');
const server = new exports.Server();
server.listen();
