import express from "express";
import UserController from "../controllers/user.controller";

const userRegisterRoute = express.Router();
userRegisterRoute.post("/", UserController.handleRegister);

const userLoginRoute = express.Router();
userLoginRoute.post("/", UserController.handleLogin);

export { userRegisterRoute, userLoginRoute };
