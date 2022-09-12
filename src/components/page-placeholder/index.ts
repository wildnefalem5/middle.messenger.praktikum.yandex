import { Button } from "./../button/index";
import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface PagePlaceholderProps {
  classList?: string;
  codeStatus: string;
  title: string;
  text: string;
  button: Button;
}

export class PagePlaceholder extends Block<PagePlaceholderProps> {
  render() {
    return this.compile(template, this._props);
  }
}
