import { TodoUser } from "../model/user.schema";
import { Auth } from "../model/auth.schema";
import { IUser, IAuth } from "../entities/user.entity";

const UserRepository = {
  getUser: async (email: string) => {
    try {
      const user = await TodoUser.findOne({ email });
      return user;
    } catch (error) {
      console.log(`Repository error: ${error}`);
    }
  },
  createUser: async (user: IUser) => {
    try {
      const newUser = new TodoUser(user);
      await newUser.save();
    } catch (error) {
      console.log(`Repository error: ${error}`);
    }
  },
  createAuth: async (auth: IAuth) => {
    try {
      const newAuth = new Auth(auth);
      await newAuth.save();
    } catch (error) {
      console.log(`Repository error: ${error}`);
    }
  },
  getAuth: async (refreshToken: string) => {
    try {
      const auth = await Auth.findOne({ refreshToken });
      return auth;
    } catch (error) {
      console.log(`Repository error: ${error}`);
    }
  },
};

export default UserRepository;
