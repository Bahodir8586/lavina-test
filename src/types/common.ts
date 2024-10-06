export interface IResponse<T> {
  isOk: boolean;
  message: string;
  data: T;
}
