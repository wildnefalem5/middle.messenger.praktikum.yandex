import Handlebars from "handlebars";
import template from "./template.hbs";

import { fieldTemplate } from "../../components/field";
import { buttonTemplate } from "../../components/button";

interface LoginPageProps {}

Handlebars.registerPartial("loginPage", template);

export const loginPageTemplate = (props: LoginPageProps) => {
  return template({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate,
  });
};
