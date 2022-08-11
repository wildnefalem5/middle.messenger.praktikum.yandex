import { Button } from '../../../../components/button';
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface LoginFormProps {
  emailField: any;
  passwordField: any;
  button: Button;
  attr: {
    class?: string;
  };
  events?: any;
}

export class LoginForm extends Block<LoginFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}