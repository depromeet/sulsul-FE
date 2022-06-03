import Router from 'next/router';
import { isNil } from 'lodash';

export default class QueryParams {
  static get(key: string) {
    if (typeof window === 'undefined' || isNil(key)) return;

    const params: Record<string, any> = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams: URLSearchParams, prop: string) => searchParams.get(prop),
    });
    const value = params[key];
    return value ? JSON.parse(value.toString()) : value;
  }

  static set(key: string, value: any) {
    if (typeof window === 'undefined' || isNil(key)) return;

    if (isNil(value)) {
      this.delete(key);
      return;
    }

    const url = new URL(window.location.href);
    url.searchParams.set(key, JSON.stringify(value));

    Router.replace(url.href);
  }

  static delete(key: string) {
    if (typeof window === 'undefined' || isNil(key)) return;

    const url = new URL(window.location.href);
    url.searchParams.delete(key);

    Router.replace(url);
  }
}
