import Handlebars from "handlebars";
import template from "./template.hbs";

interface ButtonProps {
  className?: string;
  type?: string;
  attributes?: string;
  text: string;
}

Handlebars.registerPartial("button", template);

export const buttonTemplate = ({ type = "button", ...rest }: ButtonProps) => {
  return template({ type, ...rest });
};
