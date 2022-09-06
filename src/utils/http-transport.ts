export enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IRequestOptions {
  method?: string;
  retries?: number;
  data?: Record<string, string | number | Array<string | number>>;
  timeout?: number;
  headers?: Record<string, string>;
}

export class HTTPTransport {
  get = (url: string, options: IRequestOptions = {}) => {
    const preparedUrl = options.data
      ? `${url}${queryStringify(options.data)}`
      : url;

    return this.request(preparedUrl, { ...options, method: METHODS.GET });
  };

  post = (url: string, options: IRequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options: IRequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options: IRequestOptions = {}) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  // eslint-disable-next-line class-methods-use-this
  private request(
    url: string,
    options: IRequestOptions = {},
    timeout = 5000
  ): Promise<XMLHttpRequest> {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error("No method"));
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

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
