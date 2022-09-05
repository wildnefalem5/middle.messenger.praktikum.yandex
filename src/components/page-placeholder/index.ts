import { Button } from './../button/index';
import template from "./template.hbs";
import Block from "../../utils/block";

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