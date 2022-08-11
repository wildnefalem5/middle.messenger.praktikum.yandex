import {
  nameValidate,
  loginValidate,
  emailValidate,
  phoneValidate,
  passwordValidate,
} from "./../../utils/validate";
import { RegistrationForm } from "./components/registration-form/index";
import { showFormDataInConsole } from "./../../utils/show-form-data-console";
import "../../styles.scss";
import { renderTemplate } from "./../../utils/render-template";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";

import template from "./template.hbs";
import Block from "../../utils/block";
import { Input } from "../../components/input";

interface RegistrationPageProps {}

interface EventType {
  preventDefault: Function; 
  target: HTMLFormElement; 
}

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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          nameValidate(e.target.value) ? "" : "Wrong first name"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          nameValidate(e.target.value) ? "" : "Wrong second name"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          loginValidate(e.target.value) ? "" : "Wrong login"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          emailValidate(e.target.value) ? "" : "Wrong email"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          phoneValidate(e.target.value) ? "" : "Wrong phone"
        );
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
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          passwordValidate(e.target.value) ? "" : "Wrong password"
        );
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
    submit: (e: EventType) => {
      e.preventDefault();

      showFormDataInConsole(e.target);
    },
  },
});

export class RegistrationPage extends Block<RegistrationPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate(
  "#root",
  new RegistrationPage("div", {
    registrationForm,
  })
);
