import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface PasswordFormProps {
  oldPasswordField: Field;
  newPasswordField: Field;
  repeatedNewPasswordField: Field;
  button: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: (e: Event) => void;
  };
}

export class PasswordForm extends Block<PasswordFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
