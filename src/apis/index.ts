export * from './country';
export * from './record';
export * from './request-beer';
export * from './upload';
export * from './user';
export * from './beer';
export * from './continent';

export interface IError {
  message: string;
  code: number;
}
export interface IBaseResponse<T extends any> {
  success: boolean;
  contents: T;
  error?: IError | null;
}

export interface IBasePageNationResponse<T extends any> extends IBaseResponse<T> {
  hasNext: boolean;
  nextCursor: number;
  resultCount: number;
}
