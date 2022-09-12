import { IRequestOptions } from "../utils/http-transport";
import { Api } from "./api";
import {
  RequestUserAvatarData,
  RequestUserPasswordData,
  RequestUserData,
} from "./types";

export class UserApi extends Api {
  public updateProfile(options: IRequestOptions<RequestUserData>) {
    return this._http.put("/user/profile", {
      ...options,
      headers: this._jsonHeaders,
    });
  }

  public updateAvatar(options: IRequestOptions<RequestUserAvatarData>) {
    return this._http.put("/user/profile/avatar", options);
  }

  public updatePassword(options: IRequestOptions<RequestUserPasswordData>) {
    return this._http.put("/user/password", {
      ...options,
      headers: this._jsonHeaders,
    });
  }
}
