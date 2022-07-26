import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

Handlebars.registerPartial("chat", template);

export const chatPageTemplate = (props) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
