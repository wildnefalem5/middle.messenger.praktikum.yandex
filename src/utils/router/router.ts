import { Route } from "./route";

export class Router {
  static __instance: any;
  private _currentRoute: Route | null;
  public routes: Route[];
  public history: any;
  private _rootQuery: string;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  public use(pathname: string, block: any) {
    const route: Route = new Route(pathname, block, {
      rootQuery: this._rootQuery,
    });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.addEventListener("popstate", (event: any) => {
      this._onRoute(event.currentTarget.location.pathname);
    });

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  public go(pathname: string) {
    history.pushState({}, "", pathname);

    this._onRoute(pathname);
  }

  public getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }

  public back() {
    history.back();
  }

  public forward() {
    history.forward();
  }
}

export const router = new Router("#root");