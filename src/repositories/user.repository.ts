import { TodoUser } from "../model/user.schema";
import { IUser } from "../entities/user.entity";

const UserRepository = {
  getUser: async (email: string) => {
    try {
      const user = await TodoUser.findOne({ email });
      return user;
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
  createUser: async (user: IUser) => {
    try {
      const newUser = new TodoUser(user);
      await newUser.save();
    } catch (error) {
      console.log(`Repository error: #{error}`);
    }
  },
};

export default UserRepository;
