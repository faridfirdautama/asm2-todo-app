"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todos = void 0;
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    title: String,
    todos: String,
});
exports.Todos = (0, mongoose_1.model)("Todos", todoSchema);
