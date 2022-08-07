import Handlebars from "handlebars";
import template from "./template.hbs";

import { fieldTemplate } from "../../components/field";
import { buttonTemplate } from "../../components/button";

interface RegistrationPageProps {}

Handlebars.registerPartial("registrationPage", template);

export const registrationPageTemplate = (props: RegistrationPageProps) => {
  return template({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate,
  });
};
