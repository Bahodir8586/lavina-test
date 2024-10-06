import { IResponse } from "./common";

export interface IUser {
  id: string;
  name: string;
  email: string;
  key: string;
  secret: string;
}

export type ICreateUserRequest = Omit<IUser, "id">;

export type ICreateUserResponse = IResponse<IUser>;
export type IGetUserInfoResponse = IResponse<IUser>;
