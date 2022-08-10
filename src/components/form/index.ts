import { Button } from './../button/index';
import template from "./template.hbs";
import Block from "../../utils/block";

interface FormProps {
  fields: any;
  button: Button;
  attr: {
    class?: string;
  };
  events?: any;
}

export class Form extends Block<FormProps> {
  render() {
    return this.compile(template, this._props);
  }
}