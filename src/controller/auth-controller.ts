import { store, Store } from "./../utils/store";
import { Router } from "./../utils/router";
import { IRequestOptions } from "./../utils/http-transport";
import { AuthApi } from "./../api/auth-api";

export class AuthController {
  private _api: AuthApi;
  private _router: Router;
  private _store: Store;

  constructor() {
    this._api = new AuthApi();
    this._router = new Router("#root");
    this._store = store;
  }

  signIn(options: IRequestOptions) {
    return this._api
      .signIn(options)
      .then((response) => {
        if (response.status === 200) {
          return this.getUser();
        }
      })
      .then((user) => {
        if (user) {
          this._router.go("/chat");
        }
      })
      .catch(() => {
        console.log("some error in auth-controller, signIn");
      });
  }

  signUp(options: IRequestOptions) {
    return this._api
      .signUp(options)
      .then((response) => {
        console.log(response, "auth-controller, sign up");

        if (response.status == 200) {
          this._router.go("/chat");
        }
      })
      .catch(() => {
        console.log("some error in auth-controller, signUp");
      });
  }

  getUser() {
    return this._api
      .getUser()
      .then((response) => {
        const user = JSON.parse(response.response);

        this._store.setState("user", user);

        return user;
      })
      .catch(() => {
        console.log("some error in auth-controller, getUser");
      });
  }

  logout() {
    return this._api
      .logout()
      .then((response) => {
        if (response.status == 200) {
          this._router.go("/");
        }
      })
      .catch(() => {
        console.log("some error in auth-controller, logout");
      });
  }
}
