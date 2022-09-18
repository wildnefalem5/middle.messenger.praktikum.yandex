import { store, Store } from "../../utils/store/store";
import { router } from "../../utils/router/router";
import { IRequestOptions } from "../../utils/http-transport/http-transport";
import { AuthApi } from "../auth-api";
import { RequestLoginData, RequestUserData } from "../types";

class AuthController {
  static __instance: AuthController;
  private _api: AuthApi;
  private _store: Store;

  constructor() {
    if (AuthController.__instance) {
      return AuthController.__instance;
    }

    this._api = new AuthApi();
    this._store = store;

    AuthController.__instance = this;
  }

  signIn(options: IRequestOptions<RequestLoginData>) {
    return this._api
      .signIn(options)
      .then((response) => {
        if (response.status === 200) {
          return this.getUser();
        }
      })
      .then((user) => {
        if (user) {
          router.go("/messenger");
        }
      });
  }

  signUp(options: IRequestOptions<RequestUserData>) {
    return this._api.signUp(options).then((response) => {
      if (response.status == 200) {
        router.go("/messenger");
      }
    });
  }

  getUser() {
    return this._api.getUser().then((response) => {
      if (response.status === 200) {
        const user = JSON.parse(response.response);

        this._store.setState("user", user);

        return user;
      }
    });
  }

  logout() {
    return this._api.logout().then((response) => {
      if (response.status == 200) {
        router.go("/");
      }
    });
  }
}

export const authController = new AuthController();
