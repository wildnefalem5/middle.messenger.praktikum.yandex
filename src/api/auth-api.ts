import { IRequestOptions } from "../utils/http-transport/http-transport";
import { Api } from "./api";
import { RequestLoginData, RequestUserData } from "./types";

export class AuthApi extends Api {
  public signIn(options: IRequestOptions<RequestLoginData>) {
    return this._http.post("/auth/signin", {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public signUp(options: IRequestOptions<RequestUserData>) {
    return this._http.post("/auth/signup", {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public getUser() {
    return this._http.get("/auth/user", {});
  }

  public logout() {
    return this._http.post("/auth/logout", {});
  }
}
