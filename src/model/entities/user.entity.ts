interface IUserRegisterRequest {
  name: string;
  email: string;
  password: string;
}

interface IUserLoginRequest {
  email: string;
  password: string;
}

interface IAuth {
  userId: string;
  refreshToken: string;
}

export { IUserRegisterRequest, IUserLoginRequest, IAuth };
