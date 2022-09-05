import '../../styles.scss'
import { renderTemplate } from "./../../utils/render-template";
import template from "./template.hbs";
import Block from "../../utils/block";

interface ChatPageProps {}

export class ChatPage extends Block<ChatPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate("#root", new ChatPage("div", {}));
