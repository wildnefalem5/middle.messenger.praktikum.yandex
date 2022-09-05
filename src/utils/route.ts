import { renderTemplate } from "./render-template";

export class Route {
  private _pathname: string;
  private _blockClass: any;
  private _block: any | null;
  private _props: any;

  constructor(pathname: string, view: any, props: object) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  public match(pathname: string) {
    return this._pathname === pathname;
  }

  public render() {
    if (!this._block) {
      this._block = this._blockClass;
    }

    renderTemplate(this._props.rootQuery, this._block);

    return;
  }
}
