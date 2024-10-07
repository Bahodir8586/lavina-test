import { useQuery, useMutation } from "@tanstack/react-query";

import { createNewUser, getUserInfo } from "api";
import { IGetUserInfoResponse } from "types";

export const useGetUserInfo = () => {
  return useQuery(
    ["user"],
    async () => {
      const { data } = await getUserInfo();
      return data as IGetUserInfoResponse;
    },
    {
      staleTime: Infinity,
      retry: false,
    }
  );
};

export const useCreateNewUser = () => {
  return useMutation(createNewUser, {
    onSuccess: () => {},
    onError: () => {},
  });
};
