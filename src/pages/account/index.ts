import Handlebars from "handlebars";
import template from "./template.hbs";

import { fieldTemplate } from "../../components/field";
import { buttonTemplate } from "../../components/button";
import { inputTemplate } from "../../components/input";
import { addEventListener, removeEventListener } from "../../utils/dom";

class AccountPage extends HTMLElement {
  constructor() {
    super();

    this._tabs = [...this.querySelectorAll("[data-tab]")];

    this._userForm = this.querySelector("[data-user-form]");
    this._openerUserForm = this.querySelector("[data-tab-user-form-opener]");

    this._passwordForm = this.querySelector("[data-password-form]");
    this._openerPasswordForm = this.querySelector(
      "[data-tab-password-form-opener]"
    );
  }

  connectedCallback() {
    addEventListener(this._userForm, "submit", this._handleSubmit);
    addEventListener(
      this._openerUserForm,
      "click",
      this._handleUserFormOpenerClick
    );

    addEventListener(this._passwordForm, "submit", this._handleSubmit);
    addEventListener(
      this._openerPasswordForm,
      "click",
      this._handlePasswordFormOpenerClick
    );
  }

  disconnectedCallback() {
    removeEventListener(this._userForm, "submit", this._handleSubmit);
    removeEventListener(
      this._openerUserForm,
      "click",
      this._handleUserFormOpenerClick
    );

    removeEventListener(this._passwordForm, "submit", this._handleSubmit);
    removeEventListener(
      this._openerPasswordForm,
      "click",
      this._handlePasswordFormOpenerClick
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    const imitatedQuery = new Promise((resolve) => {
      setTimeout(resolve, 4000);
    });

    imitatedQuery
      .then((response) => {
        console.log("update account page");
      })
      .finally(() => {
        this._changeTabById("user-info");
      });
  };

  _handleUserFormOpenerClick = () => {
    this._changeTabById("user-form");
  };

  _handlePasswordFormOpenerClick = () => {
    this._changeTabById("password-form");
  };

  _changeTabById(tabId) {
    this._tabs.forEach((tab) => {
      tab.classList.toggle("hidden", tab.dataset.tab !== tabId);
    });
  }
}

customElements.define("account-page", AccountPage);

const user = [
  { field: "Email", value: "wildnefalem5@gmail.com" },
  { field: "Login", value: "securityOleg" },
  { field: "First name", value: "Oleg" },
  { field: "Second name", value: "Olegov" },
  { field: "Chat name", value: "Oleg" },
  { field: "Phone", value: "+7 (777) 777 77 77" },
];

Handlebars.registerPartial("account-page", template);

export const accountPageTemplate = (props) => {
  return template({
    ...props,
    field: fieldTemplate,
    button: buttonTemplate,
    input: inputTemplate,
    user: user,
  });
};
