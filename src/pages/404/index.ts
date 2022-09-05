import "../../styles.scss";
import template from "./template.hbs";
import Block from "../../utils/block";
import { PagePlaceholder } from "../../components/page-placeholder/index";
import { Button } from "../../components/button/index";

interface NotFoundPageProps {}

const button = new Button("button", {
  text: "go to chat",
  attr: {
    class: "button page-placeholder__button",
  },
});

const pagePlaceholder = new PagePlaceholder("div", {
  codeStatus: "404",
  title: "Page not found",
  text: "Sorry we couldn't find this page",
  button,
});

export class NotFoundPageComponent extends Block<NotFoundPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const NotFoundPage = new NotFoundPageComponent("div", {
  pagePlaceholder,
});
