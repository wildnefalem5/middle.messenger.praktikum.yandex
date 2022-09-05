import "../../styles.scss";
import template from "./template.hbs";
import Block from "../../utils/block";
import { renderTemplate } from "../../utils/render-template";
import { PagePlaceholder } from "../../components/page-placeholder/index";
import { Button } from "../../components/button/index";

interface ServiceWorkPageProps {}

const button = new Button("button", {
  text: "go to chat",
  attr: {
    class: "button page-placeholder__button",
  },
});

const pagePlaceholder = new PagePlaceholder("div", {
  codeStatus: "500",
  title: "Service work",
  text: "Sorry, we working on some problem.",
  button,
});

export class ServiceWorkPage extends Block<ServiceWorkPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate("#root", pagePlaceholder);
