import { AvatarForm } from "./components/avatar-form/index";
import { StoreEvents, User } from "./../../utils/store";
import { AuthController } from "./../../controller/auth-controller";
import { Router } from "./../../utils/router";
import "../../styles.scss";
import {
  nameValidate,
  loginValidate,
  emailValidate,
  phoneValidate,
  passwordValidate,
} from "./../../utils/validate";
import { UserForm } from "./components/user-form/index";
import { PasswordForm } from "./components/password-form/index";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";
import template from "./template.hbs";
import Block from "../../utils/block";
import { Input } from "../../components/input";
import { UserController } from "../../controller/user-controller";

interface AccountPageProps {
  user?: User;
}

interface EventType {
  preventDefault: Function;
  target: HTMLFormElement;
}

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

const userFormFirstNameInput = new Input("div", {
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
});

const userFormFirstNameField = new Field("label", {
  label: "First name",
  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormFirstNameInput,
});

const userFormSecondNameInput = new Input("div", {
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
});

const userFormSecondNameField = new Field("label", {
  label: "Second name",
  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormSecondNameInput,
});

const userFormDisplayNameInput = new Input("div", {
  placeholder: "Enter your display name",
  name: "display_name",
  type: "text",
  events: {
    blur: (e: EventType) => {
      e.target.setCustomValidity(
        nameValidate(e.target.value) ? "" : "Wrong display name"
      );
    },
  },
});

const userFormDisplayNameField = new Field("label", {
  label: "Login",

  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormDisplayNameInput,
});

const userFormLoginInput = new Input("div", {
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
});

const userFormLoginField = new Field("label", {
  label: "Email",

  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormLoginInput,
});

const userFormEmailInput = new Input("div", {
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
});

const userFormEmailField = new Field("label", {
  label: "Email",

  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormEmailInput,
});

const userFormPhoneInput = new Input("div", {
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
});

const userFormPhoneField = new Field("label", {
  label: "Phone",

  attr: {
    class: "field account-page__user-form-field",
  },
  input: userFormPhoneInput,
});

const userForm = new UserForm("form", {
  firstNameField: userFormFirstNameField,
  secondNameField: userFormSecondNameField,
  displayNameField: userFormDisplayNameField,
  emailField: userFormEmailField,
  loginField: userFormLoginField,
  phoneField: userFormPhoneField,
  button: userFormSubmitButton,
  attr: {
    class: "account-page__user-form hidden",
  },
  events: {
    submit: (e: EventType) => {
      e.preventDefault();

      const data = getDataFromForm(e.target);
      const userController = new UserController();

      userController.updateProfile({ data });
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

const passwordFormOldPasswordInput = new Input("div", {
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
});

const passwordFormOldPasswordField = new Field("label", {
  label: "Old password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: passwordFormOldPasswordInput,
});

const passwordFormNewPasswordInput = new Input("div", {
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
});

const passwordFormNewPasswordField = new Field("label", {
  label: "New password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: passwordFormNewPasswordInput,
});

const passwordFormRepeatPasswordInput = new Input("div", {
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
});

const passwordFormRepeatPasswordField = new Field("label", {
  label: "Repeat new password",

  attr: {
    class: "field account-page__password-form-field",
  },
  input: passwordFormRepeatPasswordInput,
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

      const data = getDataFromForm(e.target);
      const userController = new UserController();

      userController.updatePassword({ data });
    },
  },
});

const logoutButton = new Button("button", {
  text: "Log out",
  attr: {
    class: "account-page__logout",
    type: "button",
  },
  events: {
    click: () => {
      const router = new Router("#root");
      const authController = new AuthController();

      authController.logout();

      router.go("/");
    },
  },
});

const avatarInput = new Input("div", {
  name: "avatar",
  type: "file",
  attr: {
    class: "account-page__avatar-file-input",
  },
  events: {
    change: (e: EventType) => {
      const data = new FormData();
      data.append("avatar", e.target.files[0]);

      const userController = new UserController();

      userController.updateAvatar({ data });
    },
  },
});

const avatarField = new Field("label", {
  label: "Change avatar",
  attr: {
    class: "account-page__avatar-file",
  },
  input: avatarInput,
});

export class AccountPageComponent extends Block<AccountPageProps> {
  constructor(tag: string, props: any) {
    super(tag, props);

    this._store.on(StoreEvents.UPDATED, () => {
      this.setProps({
        user: this._store.getState().user,
      });

      userFormFirstNameInput.setProps({ value: this._props.user?.first_name });
      userFormSecondNameInput.setProps({
        value: this._props.user?.second_name,
      });
      userFormDisplayNameInput.setProps({
        value: this._props.user?.display_name,
      });
      userFormLoginInput.setProps({ value: this._props.user?.login });
      userFormEmailInput.setProps({ value: this._props.user?.email });
      userFormPhoneInput.setProps({ value: this._props.user?.phone });
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}

export const AccountPage = new AccountPageComponent("div", {
  userForm,
  passwordForm,
  avatarField,
  editInfoButton,
  changePasswordButton,
  logoutButton,
});
