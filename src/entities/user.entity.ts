interface IUser {
  name: string;
  email: string;
  password: string;
}

interface IUserLoginRequest {
  email: string;
  password: string;
}

export { IUser, IUserLoginRequest };
