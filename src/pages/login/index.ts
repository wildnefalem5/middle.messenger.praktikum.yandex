import { showFormDataInConsole } from './../../utils/show-form-data-console';
import { getElements } from "./../../utils/get-elements";
import { renderTemplate } from "./../../utils/render-template";
import "../../styles.scss";
import { Wrapper } from "./../../components/wrapper/index";
import { Form } from "./../../components/form/index";
import { Field } from "./../../components/field/index";
import template from "./template.hbs";
import { Button } from "../../components/button/index";
import Block from "../../utils/block";

interface LoginPageProps {}

const button = new Button("button", {
  text: "sign in",
  attr: {
    class: "button login-page__form-button",
  },
});

const emailField = new Field("label", {
  label: "Email",
  placeholder: "Enter your email",
  name: "email",
  attr: {
    class: "field login-page__form-field",
  },
});

const passwordField = new Field("label", {
  label: "Email",
  placeholder: "Enter your password",
  name: "password",
  attr: {
    class: "field login-page__form-field",
  },
});

const fields = new Wrapper("div", {
  nodes: getElements({ emailField, passwordField }),
  attr: {
    class: "login-page__form-fields",
  },
});

const loginPageForm = new Form("form", {
  fields,
  button,
  attr: {
    class: "login-page__form",
  },
  events: {
    submit: (e) => {
      e.preventDefault()

      showFormDataInConsole(e.target)
    }
  }
});

export class LoginPage extends Block<LoginPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate(
  "#root",
  new LoginPage("div", {
    loginPageForm,
  })
);
