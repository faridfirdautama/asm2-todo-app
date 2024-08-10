import UserRepository from "../repositories/user.repository";
import { IUser, IUserLoginRequest, IAuth } from "../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

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
  createAuth: async (auth: IAuth) => {
    try {
      const newAuth = await UserRepository.createAuth(auth);
      return newAuth;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  getAuth: async (refreshToken: string) => {
    try {
      const auth = await UserRepository.getAuth(refreshToken);
      return auth;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  userRegister: async (user: IUser) => {
    try {
      // validation
      if (!user.email || !user.password) {
        return "Email and password are required";
      }
      if (user.password.length < 8) {
        return "Password should minimum > 8 characters";
      }

      // collision
      const emailExist = await UserService.getUser(user.email);
      if (emailExist) {
        return "Email already exist";
      }

      // password hashing
      user.password = await bcrypt.hash(user.password, 13);

      // return response
      const newUser = await UserService.createUser(user);
      return newUser;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  userLogin: async (user: IUserLoginRequest) => {
    try {
      // validation
      if (!user.email || !user.password) {
        return "Email and password are required";
      }
      if (user.password.length < 8) {
        return "Password should minimum > 8 characters";
      }

      // record check
      const getUser = await UserService.getUser(user.email);
      if (!getUser) {
        return "System will sent reset email link to your associated email, if the email found registered";
      }

      // password matching
      const isMatch = await bcrypt.compare(
        user.password,
        getUser.password as string,
      );
      if (!isMatch) {
        return "Invalid credentials";
      }

      // create accessToken & refreshToken
      const payload = {
        id: getUser._id,
        name: getUser.name,
        email: getUser.email,
      };
      const accessToken = jwt.sign(
        payload,
        process.env.JWT_ACCESS_KEY as string,
        {
          expiresIn: "15m",
        },
      );
      const refreshToken = jwt.sign(
        payload,
        process.env.JWT_REFRESH_KEY as string,
        {
          expiresIn: "7d",
        },
      );

      // save refreshToken to DB
      const userId = getUser._id.toString();
      await UserService.createAuth({ userId, refreshToken });
      const result = { accessToken, refreshToken };
      return result;
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
  userLogout: async (refreshToken: string) => {
    try {
      await UserService.getAuth(refreshToken);
    } catch (error) {
      console.log(`Service error: ${error}`);
    }
  },
};

export default UserService;
