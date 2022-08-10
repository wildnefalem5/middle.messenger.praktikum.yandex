import "../../styles.scss";
import { renderTemplate } from "./../../utils/render-template";
import { Wrapper } from "./../../components/wrapper/index";
import { Form } from "./../../components/form/index";
import { getElements } from "./../../utils/get-elements";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";
import template from "./template.hbs";
import Block from "../../utils/block";

interface User {
  field: string;
  value: string;
}

interface AccountPageProps {}

const users: User[] = [
  { field: "Email", value: "wildnefalem5@gmail.com" },
  { field: "Login", value: "securityOleg" },
  { field: "First name", value: "Oleg" },
  { field: "Second name", value: "Olegov" },
  { field: "Chat name", value: "Oleg" },
  { field: "Phone", value: "+7 (777) 777 77 77" },
];

const toggleFormVisible = (form) => {
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
  placeholder: "Enter your first name",
  name: "first_name",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormSecondNameField = new Field("label", {
  label: "Second name",
  placeholder: "Enter your second name",
  name: "second_name",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormLoginField = new Field("label", {
  label: "Login",
  placeholder: "Enter your login",
  name: "login",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormEmailField = new Field("label", {
  label: "Email",
  placeholder: "Enter your email",
  name: "email",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormPhoneField = new Field("label", {
  label: "Phone",
  placeholder: "Enter your phone",
  name: "phone",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormPasswordField = new Field("label", {
  label: "Password",
  placeholder: "Enter your password",
  name: "password",
  attr: {
    class: "field account-page__user-form-field",
  },
});

const userFormFields = new Wrapper("div", {
  nodes: getElements({
    userFormFirstNameField,
    userFormSecondNameField,
    userFormLoginField,
    userFormEmailField,
    userFormPhoneField,
    userFormPasswordField,
  }),
  attr: {
    class: "account-page__user-form-fields",
  },
});

const userForm = new Form("form", {
  fields: userFormFields,
  button: userFormSubmitButton,
  attr: {
    class: "account-page__user-form hidden",
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
  placeholder: "Enter your old password",
  name: "oldPassword",
  attr: {
    class: "field account-page__password-form-field",
  },
});

const passwordFormNewPasswordField = new Field("label", {
  label: "New password",
  placeholder: "Enter your new password",
  name: "newPassword",
  attr: {
    class: "field account-page__password-form-field",
  },
});

const passwordFormRepeatPasswordField = new Field("label", {
  label: "Repeat new password",
  placeholder: "Repeat your new password",
  name: "repeat_newPassword",
  attr: {
    class: "field account-page__password-form-field",
  },
});

const passwordFormFields = new Wrapper("div", {
  nodes: getElements({
    passwordFormOldPasswordField,
    passwordFormNewPasswordField,
    passwordFormRepeatPasswordField,
  }),
  attr: {
    class: "account-page__user-form-fields",
  },
});

const passwordForm = new Form("form", {
  fields: passwordFormFields,
  button: passwordFormSubmitButton,
  attr: {
    class: "account-page__password-form hidden",
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
