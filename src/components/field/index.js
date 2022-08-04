import Handlebars from "handlebars";
import template from "./template.hbs";

import { inputTemplate } from "../input";

Handlebars.registerPartial("field", template);

export const fieldTemplate = (props) => {
  return template({
    ...props,
    input: inputTemplate,
  });
};
