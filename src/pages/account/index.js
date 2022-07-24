import Handlebars from "handlebars";
import template from 'bundle-text:./template.hbs';

import fieldTemplate  from '../../components/field'
import buttonTemplate from '../../components/button'
import inputTemplate from "../../components/input";


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
    this._userForm.addEventListener("submit", this._handleSubmit);
    this._openerUserForm.addEventListener(
      "click",
      this._handleUserFormOpenerClick
    );

    this._passwordForm.addEventListener("submit", this._handleSubmit);
    this._openerPasswordForm.addEventListener(
      "click",
      this._handlePasswordFormOpenerClick
    );
  }

  disconnectedCallback() {
    this._userForm.removeEventListener("submit", this._handleSubmit);
    this._openerUserForm.removeEventListener(
      "click",
      this._handleUserFormOpenerClick
    );

    this._passwordForm.removeEventListener("submit", this._handleSubmit);
    this._openerPasswordForm.removeEventListener(
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
  {field: 'Email', value: 'wildnefalem5@gmail.com'},
  {field: 'Login', value: 'securityOleg'},
  {field: 'First name', value: 'Oleg'},
  {field: 'Second name', value: 'Olegov'},
  {field: 'Chat name', value: 'Oleg'},
  {field: 'Phone', value: '+7 (777) 777 77 77'}
]

Handlebars.registerPartial("account-page", template);

export default (props) => {
  return Handlebars.compile(template)({
    ...props, 
    field: fieldTemplate,
    button: buttonTemplate,
    input: inputTemplate,
    user: user
  });
};
