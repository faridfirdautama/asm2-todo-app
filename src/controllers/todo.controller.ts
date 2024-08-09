import TodoService from "../services/todo.service";
import { Request, Response } from "express";

const TodoController = {
  handleGetAllTodos: async (req: Request, res: Response) => {
    const todos = await TodoService.getAllTodos();
    return res.status(200).json({ message: "List of Todolist", data: todos });
  },
  handleGetTodo: async (req: Request, res: Response) => {
    const todo = await TodoService.getTodo(req.params.id);
    return res.status(200).json({ message: "Todo", data: todo });
  },
  handleCreateTodo: async (req: Request, res: Response) => {
    const { title, todos } = req.body;
    const newTodo = await TodoService.createTodo({ title, todos });
    return res
      .status(201)
      .json({ message: "Todo created successfully", data: newTodo });
  },
  handleUpdateTodo: async (req: Request, res: Response) => {
    const todoId = req.params.id;
    const { title, todos } = req.body;
    await TodoService.updateTodo(todoId, { title, todos });
    return res
      .status(200)
      .json({ message: "Todo successfully updated", data: { title, todos } });
  },
  handleDeleteTodo: async (req: Request, res: Response) => {
    const todoId = req.params.id;
    await TodoService.deleteTodo(todoId);
    return res.status(200).json({ message: "Todo successfully deleted" });
  },
};

export default TodoController;
