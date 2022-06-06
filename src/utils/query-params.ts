import Router from 'next/router';
import { isNil } from 'lodash';

const get = (key: string) => {
  if (isNil(key)) return;

  const value = Router.query[key];
  return value ? JSON.parse(value.toString()) : value;
};

const set = (key: string, value: any) => {
  if (isNil(key)) return;

  if (isNil(value)) {
    _delete(key);
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.set(key, JSON.stringify(value));

  Router.replace(url.href);
};

const _delete = (key: string) => {
  if (isNil(key)) return;

  const url = new URL(window.location.href);
  url.searchParams.delete(key);

  Router.replace(url);
};

const QueryParams = {
  get,
  set,
  delete: _delete,
};

export default QueryParams;
