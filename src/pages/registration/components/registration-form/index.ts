import { Field } from './../../../../components/field/index';
import { Button } from "../../../../components/button";
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface RegistrationFormProps {
  firstNameField: Field;
  secondNameField: Field;
  loginField: Field;
  emailField: Field;
  phoneField: Field;
  passwordField: Field;
  button: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: Function;
  }
}

export class RegistrationForm extends Block<RegistrationFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
