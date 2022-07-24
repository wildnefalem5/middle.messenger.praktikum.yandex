import Handlebars from "handlebars";
import fieldTemplate from '../../components/field'
import buttonTemplate from '../../components/button'
import template from 'bundle-text:./template.hbs';

Handlebars.registerPartial("loginPage", template);

export default (props) => {
  return Handlebars.compile(template)({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate
  });
};
