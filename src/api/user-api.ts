import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class UserApi extends Api {
  constructor() {
    super();
  }

  public updateProfile(options: IRequestOptions) {
    return this._http.put(this._getUrl("/user/profile"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public updateAvatar(options: IRequestOptions) {
    return this._http.put(this._getUrl("/user/profile/avatar"), options);
  }

  public updatePassword(options: IRequestOptions) {
    return this._http.put(this._getUrl("/user/password"), {
      ...options,
      headers: this._jsonHeaders,
    });
  }
}
