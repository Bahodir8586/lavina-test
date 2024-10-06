import axios, { AxiosRequestConfig } from "axios";
import md5 from "md5";
import { notify } from "utils";

const BASE_URL = "https://no23.lavina.tech";
const KEY = "123";
const SECRET = "123";

export const createSign = (config: AxiosRequestConfig) => {
  const requestMethod = config.method?.toUpperCase();
  const requestUrl = config.url;
  const requestBody = JSON.stringify(config.data || {});
  const userSecret = SECRET;
  if (requestMethod === "GET") {
    console.log(`${requestMethod}${requestUrl}${requestBody}${userSecret}`);
  }
  return md5(`${requestMethod}${requestUrl}${requestBody}${userSecret}`);
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {},
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Key = KEY;
    config.headers.Sign = createSign(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const http = async (config: AxiosRequestConfig): Promise<unknown> => {
  try {
    const res = await axiosInstance(config);
    return res;
  } catch (err) {
    // You can handle specific error codes here, such as 401, 404, 500, etc.
    notify("Something went wrong", "error");
    console.error(err);
    throw err;
  }
};

type Methods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const methods: Record<string, Methods> = {
  get: "GET",
  post: "POST",
  put: "PUT",
  patch: "PATCH",
  delete: "DELETE",
};
