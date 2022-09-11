import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class AuthApi extends Api {
  constructor() {
    super();
  }

  public signIn(options: IRequestOptions) {
    return this._http.post(this._getUrl("/auth/signin"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public signUp(options: IRequestOptions) {
    return this._http.post(this._getUrl("/auth/signup"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public getUser() {
    return this._http.get(this._getUrl("/auth/user"), {});
  }

  public logout() {
    return this._http.post(this._getUrl("/auth/logout"), {});
  }
}
