import { Request, Response } from "express";
import UserService from "../services/user.service";

const UserController = {
  handleRegister: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const results = await UserService.userRegister({ name, email, password });
    if (typeof results === "object") {
      return res.status(400).json({ results });
    }

    return res
      .status(201)
      .json({ message: "User successfully created", data: { name, email } });
  },
  handleLogin: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const results = await UserService.userLogin({
      email,
      password,
    });

    //console.log(`Results: ${results}`);
    //console.log(`Type: ${typeof results}`);
    if (typeof results === "object") {
      return res.status(400).json({ results });
    }

    return res
      .cookie("accessToken", results?.accessToken, {
        httpOnly: true,
      })
      .cookie("refreshToken", results?.refreshToken, {
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
