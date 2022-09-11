import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block";
import template from "./template.hbs";

interface MessageFormProps {
  messageField: Field;
  submitButton: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: Function;
  };
}

export class MessageForm extends Block<MessageFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
