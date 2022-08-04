import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

Handlebars.registerPartial("page404", template);

export const notFoundPageTemplate = (props) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
