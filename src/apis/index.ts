export * from './beer';
export * from './continent';
export * from './country';

export interface IBaseResponseData<T> {
  contents: T;
  error?: {
    code: number;
    message?: string;
  };
  success: boolean;
}
