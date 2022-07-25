import Handlebars from "handlebars";
import template from "bundle-text:./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

Handlebars.registerPartial("chat", template);

export const chatPageTemplate = (props) => {
  return Handlebars.compile(template)({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
