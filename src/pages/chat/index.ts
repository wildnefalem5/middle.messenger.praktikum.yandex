import Handlebars from "handlebars";
import template from "./template.hbs";

import { pagePlaceholderTemplate } from "../../components/page-placeholder";

interface ChatPageProps {}

Handlebars.registerPartial("chat", template);

export const chatPageTemplate = (props: ChatPageProps) => {
  return template({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate,
  });
};