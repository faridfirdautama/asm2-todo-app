import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./dB/db.connect";
import { todoRouter } from "./routes/todo.route";

dotenv.config();
const app = express();
app.use(express.json());
connectDB();

// Routes
app.use("/api/v1/todos", todoRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
