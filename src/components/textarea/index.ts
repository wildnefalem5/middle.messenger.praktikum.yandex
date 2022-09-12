import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface TextareaProps {
  type?: string;
  name?: string;
  placeholder?: string;
  attr?: {
    class?: string;
  };
  events?: {
    blur?: (e: Event) => void;
    focus?: (e: Event) => void;
  };
}

export class Textarea extends Block<TextareaProps> {
  render() {
    return this.compile(template, this._props);
  }
}
