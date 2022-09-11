import { IRequestOptions } from "./../utils/http-transport";
import { store, Store } from "../utils/store";
import { UserApi } from "./../api/user-api";

export class UserController {
  private _api: UserApi;
  private _store: Store;

  constructor() {
    this._api = new UserApi();
    this._store = store;
  }

  updateProfile(options: IRequestOptions) {
    return this._api
      .updateProfile(options)
      .then((response) => {
        const user = JSON.parse(response.response);

        this._store.setState("user", user);

        return user;
      })
      .catch(() => {
        console.log("some error in user-controller, updateProfile");
      });
  }

  updateAvatar(options: IRequestOptions) {
    return this._api
      .updateAvatar(options)
      .then((response) => {
        const user = JSON.parse(response.response);

        this._store.setState("user", user);

        return user;
      })
      .catch(() => {
        console.log("some error in user-controller, updateAvatar");
      });
  }

  updatePassword(options: IRequestOptions) {
    return this._api.updatePassword(options).catch(() => {
      console.log("some error in user-controller, updatePassword");
    });
  }
}
