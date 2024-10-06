import {
  IUpdateBookStatusRequest,
  ICreateBookRequest,
} from "types";
import { http, methods } from "./config";

// This is the very incorrect way of implementing search functionality. It should be added to getBooks API as a query parameter
export const searchBooks = (query: string) => {
  const config = {
    method: methods.get,
    url: `/books/${query}`,
  };
  return http(config);
};

export const getBooks = () => {
  const config = {
    method: methods.get,
    url: "/books",
  };
  return http(config);
};

export const createNewBook = (data: ICreateBookRequest) => {
  const config = {
    method: methods.post,
    url: "/books",
    data,
  };
  return http(config);
};

export const updateBookStatus = (data: IUpdateBookStatusRequest) => {
  const config = {
    method: methods.patch,
    url: `/books/${data.id}`,
    data,
  };
  return http(config);
};

export const deleteBook = (id: string) => {
  const config = {
    method: methods.delete,
    url: `/books/${id}`,
  };
  return http(config);
};
