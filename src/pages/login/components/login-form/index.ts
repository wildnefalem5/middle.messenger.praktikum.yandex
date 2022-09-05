import { Field } from './../../../../components/field/index';
import { Button } from '../../../../components/button';
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface LoginFormProps {
  emailField: Field;
  passwordField: Field;
  button: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: Function;
  }
}

export class LoginForm extends Block<LoginFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}