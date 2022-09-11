import template from "./template.hbs";
import Block from "../../utils/block";

interface ButtonProps {
  text: string;
  attr: {
    class?: string;
    type?: string;
  };
  events?: {
    click?: Function;
  };
}

export class Button extends Block<ButtonProps> {
  render() {
    return this.compile(template, this._props);
  }
}
