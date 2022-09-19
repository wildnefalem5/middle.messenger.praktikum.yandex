import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface ChatHeaderProps {
  text: string;
  attr: {
    class: string;
  }
}

export class ChatHeader extends Block<ChatHeaderProps> {
  render() {
    return this.compile(template, this._props);
  }
}
