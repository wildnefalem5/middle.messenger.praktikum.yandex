import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class AuthApi extends Api {
  constructor() {
    super("/auth");
  }

  public signIn(options: IRequestOptions) {
    return this._http.post(this._getUrl("/signin"), options);
  }

  public signUp(options: IRequestOptions) {
    return this._http.post(this._getUrl("/signup"), options);
  }

  public getUser() {
    return this._http.get(this._getUrl("/user"), {});
  }

  public logout() {
    return this._http.post(this._getUrl("/logout"), {});
  }
}
