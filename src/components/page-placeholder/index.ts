import { Button } from "./../button/index";
import Block from "../../utils/block/block";
// @ts-ignore
import template from "./template.hbs";

interface PagePlaceholderProps {
  classList?: string;
  codeStatus: string;
  title: string;
  text: string;
}

const button = new Button("button", {
  text: "go to chat",
  attr: {
    class: "button page-placeholder__button",
  },
});

export class PagePlaceholder extends Block<PagePlaceholderProps> {
  constructor(props: any) {
    super("div", { button, ...props });
  }

  render() {
    return this.compile(template, this._props);
  }
}
