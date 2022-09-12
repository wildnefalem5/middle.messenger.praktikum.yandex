import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  attr?: {
    class?: string;
  };
  events?: {
    blur?: (e: Event) => void;
    focus?: (e: Event) => void;
    change?: (e: Event) => void;
  };
}

export class Input extends Block<InputProps> {
  render() {
    return this.compile(template, this._props);
  }
}
