import { ICreateUserRequest } from "types";
import { http, methods } from "./config";

export const getUserInfo = () => {
  const config = {
    method: methods.get,
    url: "/myself",
  };
  return http(config);
};

export const createNewUser = (data: ICreateUserRequest) => {
  const config = {
    method: methods.post,
    url: "/signup",
    data,
  };
  return http(config);
};
