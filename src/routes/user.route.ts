import express from "express";
import UserController from "../controllers/user.controller";

const userRegisterRoute = express.Router();
userRegisterRoute.post("/", UserController.handleRegister);

const userLoginRoute = express.Router();
userLoginRoute.post("/", UserController.handleLogin);

const userLogoutRoute = express.Router();
userLogoutRoute.get("/", UserController.handleLogout);

export { userRegisterRoute, userLoginRoute, userLogoutRoute };
