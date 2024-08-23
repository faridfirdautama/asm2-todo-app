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
Object.defineProperty(exports, "__esModule", { value: true });
const todo_schema_1 = require("../model/todo.schema");
const TodoRepository = {
    getAllTodos: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield todo_schema_1.Todos.find();
            return todos;
        }
        catch (error) {
            console.log(`Repository error: #{error}`);
        }
    }),
    getTodo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todo = yield todo_schema_1.Todos.findById(id);
            return todo;
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    createTodo: (todo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newTodo = new todo_schema_1.Todos(todo);
            yield newTodo.save();
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    updateTodo: (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedTodo = yield todo_schema_1.Todos.findByIdAndUpdate(id, todo);
            return updatedTodo;
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
    deleteTodo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield todo_schema_1.Todos.findByIdAndDelete(id);
        }
        catch (error) {
            console.log(`Repository error: ${error}`);
        }
    }),
};
exports.default = TodoRepository;
