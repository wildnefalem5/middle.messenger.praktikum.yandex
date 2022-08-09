import template from "./template.hbs";
import Block from "../../utils/block";

interface FieldProps {
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  label: string;
}

export class Field extends Block<FieldProps> {
  render() {
    return this.compile(template, this._props);
  }
}