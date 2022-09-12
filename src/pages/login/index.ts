import { authController } from "./../../api/controller/auth-controller";
import { emailValidate, passwordValidate } from "./../../utils/validate";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import "../../styles.scss";
import { Field } from "./../../components/field/index";
import { Button } from "../../components/button/index";
import Block from "../../utils/block/block";
import { LoginForm } from "./components/login-form";
import { Input } from "../../components/input";
// @ts-ignore
import template from "./template.hbs";

interface LoginPageProps {}

const button = new Button("button", {
  text: "sign in",
  attr: {
    class: "button login-page__form-button",
  },
});

const emailField = new Field("label", {
  label: "Login",
  attr: {
    class: "field login-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your login",
    name: "login",
    type: "text",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = emailValidate(input.value) ? "" : "Wrong email";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const passwordField = new Field("label", {
  label: "Password",
  attr: {
    class: "field login-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your password",
    name: "password",
    type: "password",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = passwordValidate(input.value) ? "" : "Wrong password";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const loginForm = new LoginForm("form", {
  emailField,
  passwordField,
  button,
  attr: {
    class: "login-page__form",
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;

      const data = getDataFromForm(form);

      authController.signIn({ data });
    },
  },
});

export class LoginPageComponent extends Block<LoginPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const LoginPage = new LoginPageComponent("div", {
  loginForm,
});
