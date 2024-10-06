import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
  searchBooks,
  getBooks,
  createNewBook,
  deleteBook,
  updateBookStatus,
} from "api";
import { ISearchBooksResponse, IGetBooksResponse } from "types";

export const useSearchBooks = (query: string) => {
  return useQuery(
    ["books", query],
    async () => {
      const res = await searchBooks(query);
      return res as ISearchBooksResponse;
    },
    {
      staleTime: 1000 * 60 * 5,
      retry: false,
    }
  );
};

export const useGetBooks = () => {
  return useQuery(
    ["books"],
    async () => {
      const res = await getBooks();
      return res as IGetBooksResponse;
    },
    {
      // The response is stale as long as we mutate the data
      staleTime: Infinity,
      retry: 1,
    }
  );
};

export const useCreateNewBook = () => {
  const queryClient = useQueryClient();
  return useMutation(createNewBook, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: () => {},
  });
};

export const useUpdateBookStatus = () => {
  const queryClient = useQueryClient();
  return useMutation(updateBookStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: () => {},
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
    onError: () => {},
  });
};
