import { HTTPTransport } from "../utils/http-transport";

export class Api {
  protected _http: HTTPTransport;
  protected _baseUrl: string;
  protected _jsonHeaders: { "Content-Type": string };

  constructor() {
    this._http = new HTTPTransport();
    this._baseUrl = "https://ya-praktikum.tech/api/v2";
    this._jsonHeaders = { "Content-Type": "application/json" };
  }

  _getUrl(path: string) {
    return `${this._baseUrl}${path}`;
  }
}
