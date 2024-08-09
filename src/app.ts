import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./dB/db.connect";

dotenv.config();
const app = express();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
