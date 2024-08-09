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
};

export default UserController;
