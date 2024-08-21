import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/dB/db.connect";
import { todoRouter } from "./routes/todo.route";
import { userRouter } from "./routes/user.route";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
connectDB();

// Routes
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
