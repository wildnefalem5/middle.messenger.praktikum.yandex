import { showFormDataInConsole } from './../../utils/show-form-data-console';
import "../../styles.scss";
import { renderTemplate } from "./../../utils/render-template";
import { Form } from "./../../components/form/index";
import { getElements } from "./../../utils/get-elements";
import { Wrapper } from "./../../components/wrapper/index";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";

import template from "./template.hbs";
import Block from "../../utils/block";

interface RegistrationPageProps {}

const button = new Button("button", {
  text: "sign up",
  attr: {
    class: "button registration-page__form-button",
  },
});

const firstNameField = new Field("label", {
  label: "First name",
  placeholder: "Enter your first name",
  name: "first_name",
  attr: {
    class: "field registration-page__form-field",
  },
});

const secondNameField = new Field("label", {
  label: "Second name",
  placeholder: "Enter your second name",
  name: "second_name",
  attr: {
    class: "field registration-page__form-field",
  },
});

const loginField = new Field("label", {
  label: "Login",
  placeholder: "Enter your login",
  name: "login",
  attr: {
    class: "field registration-page__form-field",
  },
});

const emailField = new Field("label", {
  label: "Email",
  placeholder: "Enter your email",
  name: "email",
  attr: {
    class: "field registration-page__form-field",
  },
});

const phoneField = new Field("label", {
  label: "Phone",
  placeholder: "Enter your phone",
  name: "phone",
  attr: {
    class: "field registration-page__form-field",
  },
});

const passwordField = new Field("label", {
  label: "Password",
  placeholder: "Enter your password",
  name: "password",
  attr: {
    class: "field registration-page__form-field",
  },
});

const fields = new Wrapper("div", {
  nodes: getElements({
    firstNameField,
    secondNameField,
    loginField,
    emailField,
    phoneField,
    passwordField,
  }),
  attr: {
    class: "registration-page__form-fields",
  },
});

const registrationFormPage = new Form("form", {
  fields,
  button,
  attr: {
    class: "registration-page__form",
  },
  events: {
    submit: (e) => {
      e.preventDefault()

      showFormDataInConsole(e.target)
    }
  }
});

export class RegistrationPage extends Block<RegistrationPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate(
  "#root",
  new RegistrationPage("div", {
    registrationFormPage,
  })
);
