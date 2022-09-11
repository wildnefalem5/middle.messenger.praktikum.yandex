import template from "./template.hbs";
import Block from "../../utils/block";

interface LayoutProps {
  classList?: string;
}

export class Layout extends Block<LayoutProps> {
  render() {
    return this.compile(template, this._props);
  }
}
