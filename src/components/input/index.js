import Handlebars from "handlebars";
import template from "./template.hbs";

Handlebars.registerPartial("input", template);

export const inputTemplate = (props) => {
  return template(props);
};
