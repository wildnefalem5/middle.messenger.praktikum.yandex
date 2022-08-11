import { Button } from "../../../../components/button";
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface RegistrationFormProps {
  firstNameField: any;
  secondNameField: any;
  loginField: any;
  emailField: any;
  phoneField: any;
  passwordField: any;
  button: Button;
  attr: {
    class?: string;
  };
  events?: any;
}

export class RegistrationForm extends Block<RegistrationFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
