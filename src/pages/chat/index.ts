import "../../styles.scss";
import template from "./template.hbs";
import Block from "../../utils/block";

interface ChatPageProps {}

export class ChatPageComponent extends Block<ChatPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const ChatPage = new ChatPageComponent("div", {});
