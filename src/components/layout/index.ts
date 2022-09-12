import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface LayoutProps {
  classList?: string;
}

export class Layout extends Block<LayoutProps> {
  render() {
    return this.compile(template, this._props);
  }
}
