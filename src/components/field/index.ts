import { Input } from './../input/index';
import template from "./template.hbs";
import Block from "../../utils/block";

interface FieldProps {
  label: string;
  input: Input;
  attr: {
    class?: string;
  };
  events?: any;
}

export class Field extends Block<FieldProps> {
  render() {
    return this.compile(template, this._props);
  }
}