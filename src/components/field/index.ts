import Handlebars from "handlebars";
import template from "./template.hbs";

import { inputTemplate } from "../input";

interface FieldProps {
  className?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  label: string;
}

Handlebars.registerPartial("field", template);

export const fieldTemplate = (props: FieldProps) => {
  return template({
    ...props,
    input: inputTemplate,
  });
};
