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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_repository_1 = __importDefault(require("../repositories/todo.repository"));
const TodoService = {
    getAllTodos: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todos = yield todo_repository_1.default.getAllTodos();
            return todos;
        }
        catch (error) {
            console.log(`Service error: #{error}`);
        }
    }),
    getTodo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const todo = yield todo_repository_1.default.getTodo(id);
            return todo;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    createTodo: (todo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const newTodo = yield todo_repository_1.default.createTodo(todo);
            return newTodo;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    updateTodo: (id, todo) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const updatedTodo = yield todo_repository_1.default.updateTodo(id, todo);
            return updatedTodo;
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
    deleteTodo: (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield todo_repository_1.default.deleteTodo(id);
        }
        catch (error) {
            console.log(`Service error: ${error}`);
        }
    }),
};
exports.default = TodoService;
