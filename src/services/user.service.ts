import UserRepository from "../repositories/user.repository";
import { IUser } from "../entities/user.entity";

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
    } catch (error) {}
  },
};

export default UserService;
