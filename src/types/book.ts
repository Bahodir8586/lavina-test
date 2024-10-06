import { IResponse } from "./common";

export interface IBook {
  id: string;
  title: string;
  cover: string;
  isbn: string;
  author: string;
  published: number;
  pages: number;
}

export type IBookStatus = "0" | "1" | "2";

export interface IBookWithStatus {
  book: IBook;
  status: IBookStatus;
}

export type ICreateBookRequest = Pick<IBook, "isbn">;
export type IUpdateBookStatusRequest = {
  id: IBook["id"];
  status: IBookStatus;
};

export type ISearchBooksResponse = IResponse<Array<IBook>>;
export type IGetBooksResponse = IResponse<Array<IBookWithStatus>>;
export type ICreateBookResponse = IResponse<IBookWithStatus>;
export type IUpdateBookStatusResponse = IResponse<IBookWithStatus>;
export type IDeleteBookResponse = IResponse<[]>;
