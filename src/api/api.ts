import { HTTPTransport } from "../utils/http-transport";

export class Api {
  protected _http: HTTPTransport;
  protected _baseUrl: string;

  constructor(baseUrl: string) {
    this._http = new HTTPTransport();
    this._baseUrl = baseUrl
  }

  _getUrl(path: string) {
    return `${this._baseUrl}${path}`;
  }
}
