import express from "express";
import TodoController from "../controllers/todo.controller";
import { checkAuth } from "../middleware/auth.middleware";

export const todoRouter = express.Router();
todoRouter.use(checkAuth);

todoRouter.get("/", TodoController.handleGetAllTodos);
todoRouter.get("/:id", TodoController.handleGetTodo);
todoRouter.post("/", TodoController.handleCreateTodo);
todoRouter.patch("/:id", TodoController.handleUpdateTodo);
todoRouter.delete("/:id", TodoController.handleDeleteTodo);
