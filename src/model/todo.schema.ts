import { model, Schema } from "mongoose";

const todoSchema = new Schema({
  title: String,
  todos: String,
});

export const Todos = model("Todos", todoSchema);
