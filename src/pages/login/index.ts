import { store } from './../../utils/store/store';
import { router } from "./../../utils/router/router";
import { authController } from "./../../api/controller/auth-controller";
import { inputValidate } from "./../../utils/validate";
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

class LoginInput extends Input {
  constructor(props: object) {
    super("div", {
      events: {
        blur: (e: Event) => {
          const input = e.target as HTMLInputElement;
          const error = inputValidate(input);

          if (error) {
            input?.setCustomValidity(error);
          }
        },
      },
      ...props,
    });
  }
}

const button = new Button("button", {
  text: "sign in",
  attr: {
    class: "button login-page__form-button",
  },
});

const emailInput = new LoginInput({
  placeholder: "Enter your login",
  name: "login",
  type: "text",
});

const emailField = new Field("label", {
  label: "Login",
  attr: {
    class: "field login-page__form-field",
  },
  input: emailInput,
});

const passwordInput = new LoginInput({
  placeholder: "Enter your password",
  name: "password",
  type: "password",
});

const passwordField = new Field("label", {
  label: "Password",
  attr: {
    class: "field login-page__form-field",
  },
  input: passwordInput,
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
  constructor() {
    super("div", { loginForm });

    authController.getUser().then((user) => {
      if (user) {
        store.setState('user', user)
        router.go("/messenger");
      }
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const LoginPage = new LoginPageComponent();
