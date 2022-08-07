import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

interface NotFoundPageProps {}

Handlebars.registerPartial("page404", template);

export const notFoundPageTemplate = (props: NotFoundPageProps) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
