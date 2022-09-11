import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import template from "./template.hbs";
import Block from "../../../../utils/block";

interface PasswordFormProps {
  oldPasswordField: Field;
  newPasswordField: Field;
  repeatedNewPasswordField: Field;
  button: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: Function;
  };
}

export class PasswordForm extends Block<PasswordFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
