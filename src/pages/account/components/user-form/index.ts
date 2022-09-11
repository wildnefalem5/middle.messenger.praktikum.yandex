import { StoreEvents, User } from "./../../../../utils/store";
import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import template from "./template.hbs";
import Block from "../../../../utils/block";

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
    submit?: Function;
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
