import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

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
    submit?: (e: Event) => void;
  };
}

export class RegistrationForm extends Block<RegistrationFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
