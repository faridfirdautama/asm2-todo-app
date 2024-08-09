import { Todos } from "../model/todo.schema";
import { ITodo } from "../entities/todo.entity";

const TodoRepository = {
  getAllTodos: async () => {
    try {
      const todos = await Todos.find();
      return todos;
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
  getTodo: async (id: string) => {
    try {
      const todo = await Todos.findById(id);
      return todo;
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
  createTodo: async (todo: ITodo) => {
    try {
      const newTodo = new Todos(todo);
      await newTodo.save();
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
  updateTodo: async (id: string, todo: ITodo) => {
    try {
      const updatedTodo = await Todos.findByIdAndUpdate(id, todo);
      return updatedTodo;
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
  deleteTodo: async (id: string) => {
    try {
      await Todos.findByIdAndDelete(id);
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
};

export default TodoRepository;
