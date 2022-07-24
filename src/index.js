import Handlebars from "handlebars";

import defaultTemplate from "bundle-text:./index.hbs";
import pageNotFoundTemplate from "./pages/404";
import serviceWorkPageTemplate from "./pages/500";
import accountPageTemplate from "./pages/account";
import chatPageTemplate from "./pages/chat";
import loginPageTemplate from "./pages/login";
import registrationPageTemplate from "./pages/registration";

import "./styles.scss";

const setTemplate = (template) => {
  console.log(location.pathname,{ template: template()})
  document.getElementById("root").innerHTML = template();
};

const compiledDefaultTemplate = Handlebars.compile(defaultTemplate);

document.addEventListener("DOMContentLoaded", () => {
  switch (location.pathname) {
    case "/404":
      return setTemplate(pageNotFoundTemplate);
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
      setTemplate(compiledDefaultTemplate);
  }
});
