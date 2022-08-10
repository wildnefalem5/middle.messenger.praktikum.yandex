import template from "./template.hbs";
import Block from "../../utils/block";

interface WrapperProps {
  nodes: any[];
  attr: {
    class?: string;
  }
}

export class Wrapper extends Block<WrapperProps> {
  render() {
    return this.compile(template, this._props);
  }
}