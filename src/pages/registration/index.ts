import { authController } from "./../../api/controller/auth-controller";
import {
  nameValidate,
  loginValidate,
  emailValidate,
  phoneValidate,
  passwordValidate,
} from "./../../utils/validate";
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

const button = new Button("button", {
  text: "sign up",
  attr: {
    class: "button registration-page__form-button",
  },
});

const firstNameField = new Field("label", {
  label: "First name",

  attr: {
    class: "field registration-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your first name",
    name: "first_name",
    type: "text",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = nameValidate(input.value) ? "" : "Wrong first name";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const secondNameField = new Field("label", {
  label: "Second name",

  attr: {
    class: "field registration-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your second name",
    name: "second_name",
    type: "text",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = nameValidate(input.value) ? "" : "Wrong second name";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const loginField = new Field("label", {
  label: "Login",
  attr: {
    class: "field registration-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your login",
    name: "login",
    type: "text",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = loginValidate(input.value) ? "" : "Wrong login";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const emailField = new Field("label", {
  label: "Email",
  attr: {
    class: "field registration-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your email",
    name: "email",
    type: "email",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = emailValidate(input.value) ? "" : "Wrong email";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const phoneField = new Field("label", {
  label: "Phone",

  attr: {
    class: "field registration-page__form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your phone",
    name: "phone",
    type: "text",
    events: {
      blur: (e: Event) => {
        const input = e.target as HTMLInputElement;
        const error = phoneValidate(input.value) ? "" : "Wrong phone";

        input?.setCustomValidity(error);
      },
    },
  }),
});

const passwordField = new Field("label", {
  label: "Password",

  attr: {
    class: "field registration-page__form-field",
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
