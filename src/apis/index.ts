export * from './beer';
export * from './continent';
export * from './country';

export interface IError {
  message: string;
  code: number;
}
export interface IBaseResponse<T extends any> {
  success: boolean;
  contents: T;
  error?: IError | null;
}
