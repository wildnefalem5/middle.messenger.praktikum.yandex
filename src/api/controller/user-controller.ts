import { IRequestOptions } from "../../utils/http-transport/http-transport";
import { store, Store } from "../../utils/store/store";
import { UserApi } from "../user-api";
import {
  RequestUserAvatarData,
  RequestUserPasswordData,
  RequestUserData,
} from "../types";

class UserController {
  static __instance: UserController;
  private _api: UserApi;
  private _store: Store;

  constructor() {
    if (UserController.__instance) {
      return UserController.__instance;
    }

    this._api = new UserApi();
    this._store = store;

    UserController.__instance = this;
  }

  updateProfile(options: IRequestOptions<RequestUserData>) {
    return this._api.updateProfile(options).then((response) => {
      const user = JSON.parse(response.response);

      this._store.setState("user", user);

      return user;
    });
  }

  updateAvatar(options: IRequestOptions<RequestUserAvatarData>) {
    return this._api.updateAvatar(options).then((response) => {
      const user = JSON.parse(response.response);

      this._store.setState("user", user);

      return user;
    });
  }

  updatePassword(options: IRequestOptions<RequestUserPasswordData>) {
    return this._api.updatePassword(options)
  }
}

export const userController = new UserController();
