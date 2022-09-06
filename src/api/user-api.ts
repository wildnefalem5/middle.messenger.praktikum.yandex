import { Api } from "./api";
import { IRequestOptions } from "../utils/http-transport";

export class UserApi extends Api {
  constructor() {
    super("/user");
  }

  public updateProfile(options: IRequestOptions) {
    return this._http.put(this._getUrl("/profile"), options);
  }

  public updateAvatar(options: IRequestOptions) {
    return this._http.put(this._getUrl("/profile/avatar"), options);
  }

  public updatePassword(options: IRequestOptions) {
    return this._http.put(this._getUrl("/password"), options);
  }
}
