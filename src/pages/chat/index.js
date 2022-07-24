import Handlebars from "handlebars";
import pagePlaceholderTemplate from '../../components/page-placeholder'
import template from 'bundle-text:./template.hbs';

Handlebars.registerPartial("chat", template);

export default (props) => {
  return Handlebars.compile(template)({
    ...props,
    pagePlaceholder: pagePlaceholderTemplate
  });
};
