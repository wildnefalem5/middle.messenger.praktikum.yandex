import Handlebars from "handlebars";
import template from "./template.hbs";

Handlebars.registerPartial("button", template);

export const buttonTemplate = (props) => {
  return template(props);
};
