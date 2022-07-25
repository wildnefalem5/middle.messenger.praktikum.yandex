import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

import { inputTemplate } from '../input'

Handlebars.registerPartial("field", template);

export const fieldTemplate = (props) => {
  return Handlebars.compile(template)({
    ...props,
    input: inputTemplate,
  });
};
