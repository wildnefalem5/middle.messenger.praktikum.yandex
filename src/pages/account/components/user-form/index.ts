import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface UserFormProps {
  firstNameField: Field,
  secondNameField: Field,
  loginField: Field,
  emailField: Field,
  phoneField: Field,
  passwordField: Field,
  button: Button,
  attr: {
    class?: string;
  };
  events?: any;
}


export class UserForm extends Block<UserFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
