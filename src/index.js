import template from "./index.hbs";

import { notFoundPageTemplate } from "./pages/404";
import { serviceWorkPageTemplate } from "./pages/500";
import { accountPageTemplate } from "./pages/account";
import { chatPageTemplate } from "./pages/chat";
import { loginPageTemplate } from "./pages/login";
import { registrationPageTemplate } from "./pages/registration";

import "./styles.scss";

const setTemplate = (template) => {
  document.getElementById("root").innerHTML = template();
};

document.addEventListener("DOMContentLoaded", () => {
  switch (location.pathname) {
    case "/404":
      return setTemplate(notFoundPageTemplate);
    case "/500":
      return setTemplate(serviceWorkPageTemplate);
    case "/account":
      return setTemplate(accountPageTemplate);
    case "/chat":
      return setTemplate(chatPageTemplate);
    case "/login":
      return setTemplate(loginPageTemplate);
    case "/registration":
      return setTemplate(registrationPageTemplate);
    default:
      setTemplate(template);
  }
});
