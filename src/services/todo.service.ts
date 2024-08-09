import TodoRepository from "../repositories/todo.repository";
import { ITodo } from "../entities/todo.entity";

const TodoService = {
  getAllTodos: async () => {
    try {
      const todos = await TodoRepository.getAllTodos();
      return todos;
    } catch (error) {
      console.log(`Service error: #{error}`);
    }
  },
  getTodo: async (id: string) => {
    try {
      const todo = await TodoRepository.getTodo(id);
      return todo;
    } catch (error) {
      console.log(`Service error: #{error}`);
    }
  },
  createTodo: async (todo: ITodo) => {
    try {
      const newTodo = await TodoRepository.createTodo(todo);
      return newTodo;
    } catch (error) {
      console.log(`Service error: #{error}`);
    }
  },
  updateTodo: async (id: string, todo: ITodo) => {
    try {
      const updatedTodo = await TodoRepository.updateTodo(id, todo);
      return updatedTodo;
    } catch (error) {
      console.log(`Service error: #{error}`);
    }
  },
  deleteTodo: async (id: string) => {
    try {
      await TodoRepository.deleteTodo(id);
    } catch (error) {
      console.log(`Service error: #{error}`);
    }
  },
};

export default TodoService;
