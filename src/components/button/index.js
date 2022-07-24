import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

Handlebars.registerPartial("button", template);

export default (props) => {
  return Handlebars.compile(template)(props);
};
