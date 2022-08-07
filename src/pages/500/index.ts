import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

interface ServiceWorkPageProps {}

Handlebars.registerPartial("page500", template);

export const serviceWorkPageTemplate = (props: ServiceWorkPageProps) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};
