import Block from "../../../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface BackToChatProps {}

export class BackToChat extends Block<BackToChatProps> {
  render() {
    return this.compile(template, this._props);
  }
}
