import express from "express";
import UserController from "../controllers/user.controller";

export const registerRoute = express.Router();

registerRoute.post("/", UserController.handleRegister);
