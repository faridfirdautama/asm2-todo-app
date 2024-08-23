"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = __importDefault(require("express"));
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const auth_middleware_1 = require("../middleware/auth.middleware");
exports.todoRouter = express_1.default.Router();
exports.todoRouter.use(auth_middleware_1.checkAuth);
exports.todoRouter.get("/", todo_controller_1.default.handleGetAllTodos);
exports.todoRouter.get("/:id", todo_controller_1.default.handleGetTodo);
exports.todoRouter.post("/", todo_controller_1.default.handleCreateTodo);
exports.todoRouter.patch("/:id", todo_controller_1.default.handleUpdateTodo);
exports.todoRouter.delete("/:id", todo_controller_1.default.handleDeleteTodo);
