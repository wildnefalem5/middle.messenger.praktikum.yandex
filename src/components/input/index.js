import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

Handlebars.registerPartial("input", template);

export const inputTemplate = (props) => {
  return Handlebars.compile(template)(props);
};
