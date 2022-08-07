import Handlebars from "handlebars";
import template from "./template.hbs";

interface InputProps {
  className?: string;
  type?: string;
  placeholder?: string;
  name: string;
}

Handlebars.registerPartial("input", template);

export const inputTemplate = ({ type = "text", ...rest }: InputProps) => {
  return template({ type, ...rest });
};
