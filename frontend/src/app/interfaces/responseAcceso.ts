export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ResponseAcceso {
  isSuccess: boolean;
  token: string;
  user: User;
}
