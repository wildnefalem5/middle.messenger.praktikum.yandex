import Handlebars from "handlebars";
import template from "./template.hbs";

import { buttonTemplate } from "../button";

Handlebars.registerPartial("pagePlaceholder", template);

export const pagePlaceholderTemplate = (props) => {
  return template({
    ...props,
    button: buttonTemplate,
  });
};
