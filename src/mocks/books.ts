import { IBookWithStatus } from "types";

export const MOCK_BOOKS: Array<IBookWithStatus> = [
  {
    book: {
      id: "1",
      title: "Book 1",
      cover: "https://via.placeholder.com/150",
      isbn: "123456789",
      author: "Author 1",
      published: 2021,
      pages: 100,
    },
    status: "0",
  },
  {
    book: {
      id: "2",
      title: "Book 2",
      cover: "https://via.placeholder.com/150",
      isbn: "987654321",
      author: "Author 2",
      published: 2021,
      pages: 123,
    },
    status: "1",
  },
  {
    book: {
      id: "3",
      title: "Book 3",
      cover: "https://via.placeholder.com/150",
      isbn: "123456789",
      author: "Author 3",
      published: 2021,
      pages: 256,
    },
    status: "2",
  },
  {
    book: {
      id: "4",
      title: "Book 4",
      cover: "https://via.placeholder.com/150",
      isbn: "987654321",
      author: "Author 2",
      published: 2021,
      pages: 610,
    },
    status: "1",
  },
  {
    book: {
      id: "5",
      title: "Book 5",
      cover: "https://via.placeholder.com/150",
      isbn: "123456789",
      author: "Author 5",
      published: 2021,
      pages: 93,
    },
    status: "0",
  },
  {
    book: {
      id: "6",
      title: "Book 6",
      cover: "https://via.placeholder.com/150",
      isbn: "987654321",
      author: "Author 6",
      published: 2021,
      pages: 100,
    },
    status: "1",
  },
];
