import { StoreEvents, User } from "../../../../utils/store/store";
import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface UserFormProps {
  firstNameField: Field;
  secondNameField: Field;
  loginField: Field;
  emailField: Field;
  phoneField: Field;
  passwordField: Field;
  button: Button;
  user: User;
  attr: {
    class?: string;
  };
  events?: {
    submit?: (e: Event) => void;
  };
}

export class UserForm extends Block<UserFormProps> {
  constructor(tag: string, props: any) {
    super(tag, props);

    this._store.on(StoreEvents.UPDATED, () => {
      this.setProps({
        user: this._store.getState().user,
      });
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
