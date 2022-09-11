import template from "./template.hbs";
import Block from "../../utils/block";

interface TextareaProps {
  type?: string;
  name?: string;
  placeholder?: string;
  attr?: {
    class?: string;
  };
  events?: {
    blur?: Function;
    focus?: Function;
  };
}

export class Textarea extends Block<TextareaProps> {
  render() {
    return this.compile(template, this._props);
  }
}
