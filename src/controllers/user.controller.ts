import { Request, Response } from "express";
import UserService from "../services/user.service";

const UserController = {
  handleRegister: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const messages = await UserService.userRegister({ name, email, password });
    if (typeof messages === "string") {
      return res.status(400).json({ messages });
    }

    return res
      .status(201)
      .json({ message: "User successfully created", data: { name, email } });
  },
  handleLogin: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const messages = await UserService.userLogin({
      email,
      password,
    });
    if (typeof messages === "string") {
      return res.status(400).json({ messages });
    }

    return res
      .cookie("accessToken", messages?.accessToken, {
        httpOnly: true,
      })
      .cookie("refreshToken", messages?.refreshToken, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "You are successfully logged in" });
  },
  handleLogout: async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    await UserService.userLogout(refreshToken);
    return res
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "Logout successfully" });
  },
};

export default UserController;
