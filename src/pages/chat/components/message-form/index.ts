import { Field } from "./../../../../components/field/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface MessageFormProps {
  messageField: Field;
  submitButton: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: (e: Event) => void;
  };
}

export class MessageForm extends Block<MessageFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
