import Handlebars from "handlebars";
import template from "bundle-text:./template.hbs";

import { fieldTemplate } from "../../components/field";
import { buttonTemplate } from "../../components/button";

Handlebars.registerPartial("registrationPage", template);

export const registrationPageTemplate = (props) => {
  return Handlebars.compile(template)({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate,
  });
};
