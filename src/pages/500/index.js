import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

Handlebars.registerPartial("page500", template);

export const serviceWorkPageTemplate = (props) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
