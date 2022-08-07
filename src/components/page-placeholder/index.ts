import Handlebars from "handlebars";
import template from "./template.hbs";

import { buttonTemplate } from "../button";

interface PagePlaceholderProps {
  className?: string;
  codeStatus: string;
  title: string;
  text: string;
  buttonText: string;
}

Handlebars.registerPartial("pagePlaceholder", template);

export const pagePlaceholderTemplate = (props: PagePlaceholderProps) => {
  return template({
    ...props,
    button: buttonTemplate,
  });
};
