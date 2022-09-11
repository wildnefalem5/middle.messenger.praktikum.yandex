import { AuthController } from "./../../controller/auth-controller";
import { emailValidate, passwordValidate } from "./../../utils/validate";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import "../../styles.scss";
import { Field } from "./../../components/field/index";
import template from "./template.hbs";
import { Button } from "../../components/button/index";
import Block from "../../utils/block";
import { LoginForm } from "./components/login-form";
import { Input } from "../../components/input";

interface LoginPageProps {}

interface EventType {
  preventDefault: Function;
  target: HTMLFormElement;
}

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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          emailValidate(e.target.value) ? "" : "Wrong email"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          passwordValidate(e.target.value) ? "" : "Wrong password"
        );
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
    submit: (e: EventType) => {
      e.preventDefault();

      const authController = new AuthController();
      const data = getDataFromForm(e.target);

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
