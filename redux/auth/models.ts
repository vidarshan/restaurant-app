export interface LogInUserPayload {
  id: string;
  username: string;
  phone: string;
  token: string;
  error: string;
}

export interface RegisterUserPayload {
  id: string;
  username: string;
  phone: string;
  token: string;
  error: string;
}

export interface User {
  username: string;
  phone: string;
  password: string;
}

export type AuthInitialState = {
  user: {
    id: string;
    username: string;
    phone: string;
    token: string;
  };
  users: User[];
  loading: boolean;
  error: string;
};

export interface IUserDetails {
  username: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

export interface IExistingUserDetails {
  phone: string;
  password: string;
}
