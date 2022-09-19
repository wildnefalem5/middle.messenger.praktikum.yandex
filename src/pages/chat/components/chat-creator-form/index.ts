import { Input } from "./../../../../components/input/index";
import { Button } from "../../../../components/button";
import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface ChatCreatorFormProps {
  chatCreatorInput: Input;
  chatCreatorButton: Button;
  attr: {
    class?: string;
  };
  events?: {
    submit?: (e: Event) => void;
  };
}

export class ChatCreatorForm extends Block<ChatCreatorFormProps> {
  render() {
    return this.compile(template, this._props);
  }
}
