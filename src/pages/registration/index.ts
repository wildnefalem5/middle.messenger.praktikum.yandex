import { authController } from "./../../api/controller/auth-controller";
import { inputValidate } from "./../../utils/validate";
import { RegistrationForm } from "./components/registration-form/index";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import "../../styles.scss";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";
import Block from "../../utils/block/block";
import { Input } from "../../components/input";
// @ts-ignore
import template from "./template.hbs";

interface RegistrationPageProps {}

const handleInputBlur = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const error = inputValidate(input);

  if (error) {
    input?.setCustomValidity(error);
  }
};

const button = new Button("button", {
  text: "sign up",
  attr: {
    class: "button registration-page__form-button",
  },
});

const firstNameInput = new Input("div", {
  placeholder: "Enter your first name",
  name: "first_name",
  type: "text",
  events: {
    blur: handleInputBlur,
  },
});

const firstNameField = new Field("label", {
  label: "First name",
  attr: {
    class: "field registration-page__form-field",
  },
  input: firstNameInput,
});

const secondNameInput = new Input("div", {
  placeholder: "Enter your second name",
  name: "second_name",
  type: "text",
  events: {
    blur: handleInputBlur,
  },
});

const secondNameField = new Field("label", {
  label: "Second name",
  attr: {
    class: "field registration-page__form-field",
  },
  input: secondNameInput,
});

const loginInput = new Input("div", {
  placeholder: "Enter your login",
  name: "login",
  type: "text",
  events: {
    blur: handleInputBlur,
  },
});

const loginField = new Field("label", {
  label: "Login",
  attr: {
    class: "field registration-page__form-field",
  },
  input: loginInput,
});

const emailInput = new Input("div", {
  placeholder: "Enter your email",
  name: "email",
  type: "email",
  events: {
    blur: handleInputBlur,
  },
});

const emailField = new Field("label", {
  label: "Email",
  attr: {
    class: "field registration-page__form-field",
  },
  input: emailInput,
});

const phoneInput = new Input("div", {
  placeholder: "Enter your phone",
  name: "phone",
  type: "text",
  events: {
    blur: handleInputBlur,
  },
});

const phoneField = new Field("label", {
  label: "Phone",
  attr: {
    class: "field registration-page__form-field",
  },
  input: phoneInput,
});

const passwordInput = new Input("div", {
  placeholder: "Enter your password",
  name: "password",
  type: "password",
  events: {
    blur: handleInputBlur,
  },
});

const passwordField = new Field("label", {
  label: "Password",
  attr: {
    class: "field registration-page__form-field",
  },
  input: passwordInput,
});

const registrationForm = new RegistrationForm("form", {
  firstNameField,
  secondNameField,
  loginField,
  emailField,
  phoneField,
  passwordField,
  button,
  attr: {
    class: "registration-page__form",
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;

      const data = getDataFromForm(form);

      authController.signUp({ data });
    },
  },
});

export class RegistrationPageComponent extends Block<RegistrationPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

export const RegistrationPage = new RegistrationPageComponent("div", {
  registrationForm,
});
