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
const todo_service_1 = __importDefault(require("../services/todo.service"));
const TodoController = {
    handleGetAllTodos: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todos = yield todo_service_1.default.getAllTodos();
        return res.status(200).json({ message: "List of Todolist", data: todos });
    }),
    handleGetTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todo = yield todo_service_1.default.getTodo(req.params.id);
        return res.status(200).json({ message: "Todo", data: todo });
    }),
    handleCreateTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { title, todos } = req.body;
        const newTodo = yield todo_service_1.default.createTodo({ title, todos });
        return res
            .status(201)
            .json({ message: "Todo created successfully", data: { title, todos } });
    }),
    handleUpdateTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todoId = req.params.id;
        const { title, todos } = req.body;
        yield todo_service_1.default.updateTodo(todoId, { title, todos });
        return res
            .status(200)
            .json({ message: "Todo successfully updated", data: { title, todos } });
    }),
    handleDeleteTodo: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const todoId = req.params.id;
        yield todo_service_1.default.deleteTodo(todoId);
        return res.status(200).json({ message: "Todo successfully deleted" });
    }),
};
exports.default = TodoController;
