import template from "./template.hbs";
import Block from "../../utils/block";

interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  attr?: {
    class?: string;
  };
  events?: {
    blur?: Function;
    focus?: Function;
  }
}

export class Input extends Block<InputProps> {
  render() {
    return this.compile(template, this._props);
  }
}