import Handlebars from "handlebars";
import template from "bundle-text:./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

Handlebars.registerPartial("page500", template);

export const serviceWorkPageTemplate = (props) => {
  return Handlebars.compile(template)({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
