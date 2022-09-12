import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface ButtonProps {
  text: string;
  attr: {
    class?: string;
    type?: string;
  };
  events?: {
    click?: (e: Event) => void;
  };
}

export class Button extends Block<ButtonProps> {
  render() {
    return this.compile(template, this._props);
  }
}
