import { NotFoundPage } from "./../../pages/404/index";
import { ServiceWorkPage } from "./../../pages/500/index";
import { AccountPage } from "./../../pages/account/index";
import { ChatPage } from "./../../pages/chat/index";
import { RegistrationPage } from "./../../pages/registration/index";
import { LoginPage } from "./../../pages/login/index";
import { Router } from "./router";
import { assert } from "chai";

const router = new Router("#root");

describe("Test router", () => {
  const initRouter = () => {
    router
      .use("/", LoginPage)
      .use("/sign-up", RegistrationPage)
      .use("/messenger", ChatPage)
      .use("/settings", AccountPage)
      .use("/500", ServiceWorkPage)
      .use("/404", NotFoundPage)
      .start();
  };

  it("check method getRoute", () => {
    router.use("/404", NotFoundPage);

    const route = router.getRoute("/404");

    assert.isObject(route);
  });

  it("check method go", () => {
    initRouter();

    router.go("/404");
    router.go("/500");

    assert.equal(window.location.pathname, "/500");
  });

  it("check method back", () => {
    initRouter();

    router.go("/404");
    router.go("/500");
    router.back();

    assert.equal(window.location.pathname, "/404");
  });

  it("check method forward", () => {
    initRouter();

    router.go("/404");
    router.go("/500");
    router.back();
    router.forward();

    assert.equal(window.location.pathname, "/500");
  });

  it("router is singleton", () => {
    assert.deepEqual(router, new Router("#root"));
  });
});
