import { queryStringify } from './../query-stringify';
export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IRequestOptions<Data> {
  method?: string;
  retries?: number;
  data?: Data;
  timeout?: number;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  protected _baseUrl?: string;

  constructor(baseUrl?: string) {
    this._baseUrl = baseUrl;
  }

  get = (url: string, options: IRequestOptions<any> = {}) => {
    const preparedUrl = options.data
      ? `${url}${queryStringify(options.data)}`
      : url;

    return this.request(preparedUrl, { ...options, method: METHODS.GET }).catch(
      (err) => console.log(url, err)
    );
  };

  post = (url: string, options: IRequestOptions<any> = {}) => {
    return this.request(url, {
      ...options,
      method: METHODS.POST,
    }).catch((err) => console.log(url, err));
  };

  put = (url: string, options: IRequestOptions<any> = {}) => {
    return this.request(url, {
      ...options,
      method: METHODS.PUT,
    }).catch((err) => console.log(url, err));
  };

  delete = (url: string, options: IRequestOptions<any> = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE }).catch(
      (err) => console.log(url, err)
    );
  };

  // eslint-disable-next-line class-methods-use-this
  private request(
    url: string,
    options: IRequestOptions<any> = {},
    timeout = 5000
  ): Promise<any> {
    const { headers = {}, method, data } = options;
    const preparedUrl = `${this._baseUrl}${url}`;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error("No method"));
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, preparedUrl);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.withCredentials = true;

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      !data ? xhr.send() : xhr.send(JSON.stringify(data));
    });
  }
}
