import {
  nameValidate,
  loginValidate,
  emailValidate,
  phoneValidate,
  passwordValidate,
} from "./../../utils/validate";
import { UserForm } from "./components/user-form/index";
import { PasswordForm } from "./components/password-form/index";
import { showFormDataInConsole } from "./../../utils/show-form-data-console";
import "../../styles.scss";
import { renderTemplate } from "./../../utils/render-template";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";
import template from "./template.hbs";
import Block from "../../utils/block";
import { Input } from "../../components/input";

interface User {
  field: string;
  value: string;
}

interface AccountPageProps {}

interface EventType {
  preventDefault: Function; 
  target: HTMLFormElement; 
}

const users: User[] = [
  { field: "Email", value: "wildnefalem5@gmail.com" },
  { field: "Login", value: "securityOleg" },
  { field: "First name", value: "Oleg" },
  { field: "Second name", value: "Olegov" },
  { field: "Chat name", value: "Oleg" },
  { field: "Phone", value: "+7 (777) 777 77 77" },
];

export const toggleFormVisible = (form: PasswordForm | UserForm) => {
  const formNode = form.getContent();
  const isFormNodeHidden = formNode.classList.contains("hidden");
  const info = document.getElementById("AccountPageInfo");

  if (info) {
    info.classList.toggle("hidden", isFormNodeHidden);
    formNode.classList.toggle("hidden", !isFormNodeHidden);
  }
};

const editInfoButton = new Button("button", {
  text: "Edit info",
  attr: {
    class: "button account-page__info-button",
    type: "button",
  },
  events: {
    click: () => {
      toggleFormVisible(userForm);
    },
  },
});

const changePasswordButton = new Button("button", {
  text: "Change password",
  attr: {
    class: "button account-page__info-button",
    type: "button",
  },
  events: {
    click: () => {
      toggleFormVisible(passwordForm);
    },
  },
});

const userFormSubmitButton = new Button("button", {
  text: "save",
  attr: {
    class: "button account-page__user-form-button",
    type: "submit",
  },
  events: {
    click: () => {
      toggleFormVisible(userForm);
    },
  },
});

const userFormFirstNameField = new Field("label", {
  label: "First name",

  attr: {
    class: "field account-page__user-form-field",
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

const userFormSecondNameField = new Field("label", {
  label: "Second name",

  attr: {
    class: "field account-page__user-form-field",
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

const userFormLoginField = new Field("label", {
  label: "Login",

  attr: {
    class: "field account-page__user-form-field",
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

const userFormEmailField = new Field("label", {
  label: "Email",

  attr: {
    class: "field account-page__user-form-field",
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

const userFormPhoneField = new Field("label", {
  label: "Phone",

  attr: {
    class: "field account-page__user-form-field",
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

const userFormPasswordField = new Field("label", {
  label: "Password",

  attr: {
    class: "field account-page__user-form-field",
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

const userForm = new UserForm("form", {
  firstNameField: userFormFirstNameField,
  secondNameField: userFormSecondNameField,
  loginField: userFormLoginField,
  emailField: userFormEmailField,
  phoneField: userFormPhoneField,
  passwordField: userFormPasswordField,
  button: userFormSubmitButton,
  attr: {
    class: "account-page__user-form hidden",
  },
  events: {
    submit: (e: EventType) => {
      e.preventDefault();

      showFormDataInConsole(e.target);
    },
  },
});

const passwordFormSubmitButton = new Button("button", {
  text: "save",
  attr: {
    class: "button account-page__password-form-button",
    type: "submit",
  },
  events: {
    click: () => {
      toggleFormVisible(passwordForm);
    },
  },
});

const passwordFormOldPasswordField = new Field("label", {
  label: "Old password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your old password",
    name: "oldPassword",
    type: "password",
    events: {
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          passwordValidate(e.target.value) ? "" : "Wrong old password"
        );
      },
    },
  }),
});

const passwordFormNewPasswordField = new Field("label", {
  label: "New password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: new Input("div", {
    placeholder: "Enter your new password",
    name: "newPassword",
    type: "password",
    events: {
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          passwordValidate(e.target.value) ? "" : "Wrong new password"
        );
      },
    },
  }),
});

const passwordFormRepeatPasswordField = new Field("label", {
  label: "Repeat new password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: new Input("div", {
    placeholder: "Repeat your new password",
    name: "repeat_newPassword",
    type: "password",
    events: {
      blur: (e: EventType) => {
        e.target.setCustomValidity(
          passwordValidate(e.target.value) ? "" : "Wrong repeated password"
        );
      },
    },
  }),
});

const passwordForm = new PasswordForm("form", {
  oldPasswordField: passwordFormOldPasswordField,
  newPasswordField: passwordFormNewPasswordField,
  repeatedNewPasswordField: passwordFormRepeatPasswordField,
  button: passwordFormSubmitButton,
  attr: {
    class: "account-page__password-form hidden",
  },
  events: {
    submit: (e: EventType) => {
      e.preventDefault();

      showFormDataInConsole(e.target);
    },
  },
});

export class RegistrationPage extends Block<AccountPageProps> {
  render() {
    return this.compile(template, this._props);
  }
}

renderTemplate(
  "#root",
  new RegistrationPage("div", {
    userForm,
    passwordForm,
    users,
    editInfoButton,
    changePasswordButton,
  })
);
