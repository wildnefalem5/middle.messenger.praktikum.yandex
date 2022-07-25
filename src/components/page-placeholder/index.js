import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

import { buttonTemplate } from "../button";

Handlebars.registerPartial("pagePlaceholder", template);

export const pagePlaceholderTemplate = (props) => {
  return Handlebars.compile(template)({
    ...props,
    button: buttonTemplate,
  });
};
