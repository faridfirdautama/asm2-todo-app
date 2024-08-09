import UserRepository from "../repositories/user.repository";
import { IUser } from "../entities/user.entity";
import bcrypt from "bcrypt";

const UserService = {
  getUser: async (email: string) => {
    try {
      const user = await UserRepository.getUser(email);
      return user;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  createUser: async (user: IUser) => {
    try {
      const newUser = await UserRepository.createUser(user);
      return newUser;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  userRegister: async (user: IUser) => {
    try {
      // validation
      if (!user.email || user.password.length < 8) {
        return "Email and password are required, password should > 8 characters";
      }

      // collision
      const emailExist = await UserService.getUser(user.email);
      if (emailExist) {
        return "Email already exist";
      }

      // password hashing
      user.password = await bcrypt.hash(user.password, 10);

      // return response
      const newUser = await UserService.createUser(user);
      return newUser;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
};

export default UserService;
