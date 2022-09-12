import "../../styles.scss";
import Block from "../../utils/block/block";
import { PagePlaceholder } from "../../components/page-placeholder/index";
import { Button } from "../../components/button/index";
// @ts-ignore
import template from "./template.hbs";

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

export class ServiceWorkPageComponent extends Block<ServiceWorkPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const ServiceWorkPage = new ServiceWorkPageComponent("div", {
  pagePlaceholder,
});
