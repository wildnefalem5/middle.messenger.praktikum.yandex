import "./styles.scss";
import { Router } from "./utils/router";
import { RegistrationPage } from "./pages/registration/index";
import { NotFoundPage } from "./pages/404/index";
import { ServiceWorkPage } from "./pages/500/index";
import { ChatPage } from "./pages/chat/index";
import { AccountPage } from "./pages/account/index";
import { LoginPage } from "./pages/login/index";

window.addEventListener("DOMContentLoaded", () => {
  const router = new Router("#root");

  router
    .use("/", LoginPage)
    .use("/registration", RegistrationPage)
    .use("/chat", ChatPage)
    .use("/account", AccountPage)
    .use("/500", ServiceWorkPage)
    .use("/404", NotFoundPage)
    .start();
});
