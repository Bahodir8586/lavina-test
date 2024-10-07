export interface IResponse<T> {
  isOk: boolean;
  message: string;
  data: T;
}

export interface IApiResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}
