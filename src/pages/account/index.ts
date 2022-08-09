import Handlebars from "handlebars";
import template from "./template.hbs";

import { fieldTemplate } from "../../components/field";
import { buttonTemplate } from "../../components/button";
import { inputTemplate } from "../../components/input";

interface User {
  field: string;
  value: string;
}

interface AccountPageProps {}

const user: User[] = [
  { field: "Email", value: "wildnefalem5@gmail.com" },
  { field: "Login", value: "securityOleg" },
  { field: "First name", value: "Oleg" },
  { field: "Second name", value: "Olegov" },
  { field: "Chat name", value: "Oleg" },
  { field: "Phone", value: "+7 (777) 777 77 77" },
];

Handlebars.registerPartial("account-page", template);

export const accountPageTemplate = (props: AccountPageProps) => {
  return template({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate,
    input: inputTemplate,
    user: user,
  });
};
