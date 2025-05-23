export enum UserRole {
  ADMIN = "admin",
  EMPLOYEE = "employee",
}

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    createdAt: string;
    updatedAt: string;
  };
};

export type LoginRequest = {
  password: string;
  email: string;
};
