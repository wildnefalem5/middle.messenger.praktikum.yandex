import { HTTPTransport } from "../utils/http-transport/http-transport";

export class Api {
  protected _http: HTTPTransport;
  protected _jsonHeaders: { "Content-Type": string };

  constructor() {
    this._http = new HTTPTransport("https://ya-praktikum.tech/api/v2");
    this._jsonHeaders = { "Content-Type": "application/json" };
  }
}
