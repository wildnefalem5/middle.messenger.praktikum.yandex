import { Input } from "./../input/index";
import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

export interface FieldProps {
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
