import express from "express";
import UserController from "../controllers/user.controller";

export const userRouter = express.Router();
userRouter.post("/", UserController.handleRegister);
userRouter.post("/login", UserController.handleLogin);
userRouter.post("/logout", UserController.handleLogout);
