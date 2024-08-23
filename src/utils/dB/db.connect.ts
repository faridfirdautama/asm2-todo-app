import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI_TODOLIST as string)
    .then(() => console.log("MongoDB succesfully connected"))
    .catch((err) => console.log(err));
};
