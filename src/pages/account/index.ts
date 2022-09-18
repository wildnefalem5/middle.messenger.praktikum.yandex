import { userController } from "./../../api/controller/user-controller";
import { authController } from "./../../api/controller/auth-controller";
import { StoreEvents, User } from "../../utils/store/store";
import { Router } from "../../utils/router/router";
import "../../styles.scss";
import { inputValidate } from "./../../utils/validate";
import { UserForm } from "./components/user-form/index";
import { PasswordForm } from "./components/password-form/index";
import { getDataFromForm } from "./../../utils/show-form-data-console";
import { Field } from "./../../components/field/index";
import { Button } from "./../../components/button/index";
import Block from "../../utils/block/block";
import { Input } from "../../components/input";
// @ts-ignore
import template from "./template.hbs";

interface AccountPageProps {
  user?: User;
}

class AccountInput extends Input {
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

class UserFormField extends Field {
  constructor(label: string, input: Input) {
    super("label", {
      label,
      attr: {
        class: "field account-page__user-form-field",
      },
      input,
    });
  }
}

class PasswordFormField extends Field {
  constructor(label: string, input: Input) {
    super("label", {
      label,
      attr: {
        class: "field account-page__password-form-field",
      },
      input,
    });
  }
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

const userFormFirstNameInput = new AccountInput({
  placeholder: "Enter your first name",
  name: "first_name",
  type: "text",
});

const userFormFirstNameField = new UserFormField(
  "First name",
  userFormFirstNameInput
);

const userFormSecondNameInput = new AccountInput({
  placeholder: "Enter your second name",
  name: "second_name",
  type: "text",
});

const userFormSecondNameField = new UserFormField(
  "Second name",
  userFormSecondNameInput
);

const userFormDisplayNameInput = new AccountInput({
  placeholder: "Enter your display name",
  name: "display_name",
  type: "text",
});

const userFormDisplayNameField = new UserFormField(
  "Login",
  userFormDisplayNameInput
);

const userFormLoginInput = new AccountInput({
  placeholder: "Enter your login",
  name: "login",
  type: "text",
});

const userFormLoginField = new UserFormField("Login", userFormLoginInput);

const userFormEmailInput = new AccountInput({
  placeholder: "Enter your email",
  name: "email",
  type: "email",
});

const userFormEmailField = new UserFormField("Email", userFormEmailInput);

const userFormPhoneInput = new AccountInput({
  placeholder: "Enter your phone",
  name: "phone",
  type: "text",
});

const userFormPhoneField = new UserFormField("Phone", userFormPhoneInput);

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
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;

      const data = getDataFromForm(form);

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

const passwordFormOldPasswordInput = new AccountInput({
  placeholder: "Enter your old password",
  name: "oldPassword",
  type: "password",
});

const passwordFormOldPasswordField = new PasswordFormField(
  "Old password",
  passwordFormOldPasswordInput
);

const passwordFormNewPasswordInput = new AccountInput({
  placeholder: "Enter your new password",
  name: "newPassword",
  type: "password",
});

const passwordFormNewPasswordField = new PasswordFormField(
  "New password",
  passwordFormNewPasswordInput
);

const passwordFormRepeatPasswordInput = new AccountInput({
  placeholder: "Repeat your new password",
  name: "repeat_newPassword",
  type: "password",
});

const passwordFormRepeatPasswordField = new PasswordFormField(
  "Repeat new password",
  passwordFormRepeatPasswordInput
);

const passwordForm = new PasswordForm("form", {
  oldPasswordField: passwordFormOldPasswordField,
  newPasswordField: passwordFormNewPasswordField,
  repeatedNewPasswordField: passwordFormRepeatPasswordField,
  button: passwordFormSubmitButton,
  attr: {
    class: "account-page__password-form hidden",
  },
  events: {
    submit: (e: Event) => {
      e.preventDefault();

      const form = e.target as HTMLFormElement;

      const data = getDataFromForm(form);

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
    change: (e: Event) => {
      const input = e.target as HTMLInputElement;
      const file = input.files[0];

      if (file) {
        const data = new FormData();
        data.append("avatar", file);

        userController.updateAvatar({ data });
      }
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
      const state = this._store.getState();

      this.setProps({ user: state.user });

      const { user } = state;

      userFormFirstNameInput.setProps({ value: user?.first_name });
      userFormSecondNameInput.setProps({ value: user?.second_name });
      userFormDisplayNameInput.setProps({ value: user?.display_name });
      userFormLoginInput.setProps({ value: user?.login });
      userFormEmailInput.setProps({ value: user?.email });
      userFormPhoneInput.setProps({ value: user?.phone });
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
