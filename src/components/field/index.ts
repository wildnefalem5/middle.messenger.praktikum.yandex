import template from "./template.hbs";
import Block from "../../utils/block";

interface FieldProps {
  type?: string;
  name?: string;
  placeholder?: string;
  label: string;
  attr: {
    class?: string;
  };
}

export class Field extends Block<FieldProps> {
  render() {
    return this.compile(template, this._props);
  }
}