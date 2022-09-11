import Block from "../../utils/block";
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
    blur?: Function;
    focus?: Function;
    change?: Function;
  };
}

export class Input extends Block<InputProps> {
  render() {
    return this.compile(template, this._props);
  }
}
