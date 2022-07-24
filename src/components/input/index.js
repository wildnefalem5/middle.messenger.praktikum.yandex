import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

Handlebars.registerPartial("input", template);

export default (props) => {
  return Handlebars.compile(template)(props);
};
