import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface LoginFormProps {
  emailField: Field;
  passwordField: Field;
  button: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: (e: Event) => void;
  };
}

export class LoginForm extends Block<LoginFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
