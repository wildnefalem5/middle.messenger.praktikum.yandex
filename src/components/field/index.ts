import { Input } from "./../input/index";
import template from "./template.hbs";
import Block from "../../utils/block";

interface FieldProps {
  label?: string;
  value?: string | number;
  input: Input;
  attr: {
    class?: string;
  };
}

export class Field extends Block<FieldProps> {
  render() {
    return this.compile(template, this._props);
  }
}
