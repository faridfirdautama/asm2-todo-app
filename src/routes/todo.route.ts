import express from "express";
import TodoController from "../controllers/todo.controller";

export const todoRouter = express.Router();

todoRouter.get("/", TodoController.handleGetAllTodos);
todoRouter.get("/:id", TodoController.handleGetTodo);
todoRouter.post("/", TodoController.handleCreateTodo);
todoRouter.put("/:id", TodoController.handleUpdateTodo);
todoRouter.delete("/:id", TodoController.handleDeleteTodo);
