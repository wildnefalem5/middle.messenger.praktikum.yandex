import Block from "../block/block";
import { Router } from "./router";
import { assert, expect } from "chai";

class Page extends Block<{}> {
  render() {
    return this.compile(() => "string content", this._props);
  }
}

const router = new Router("#root");

const page1 = new Page("div", {});
const registrationPage = new Page("div", {});
const chatPage = new Page("div", {});
const accountPage = new Page("div", {});
const serviceWorkPage = new Page("div", {});
const notFoundPage = new Page("div", {});

describe("Test router", () => {
  const initRouter = () => {
    router
      .use("/", page1)
      .use("/sign-up", registrationPage)
      .use("/messenger", chatPage)
      .use("/settings", accountPage)
      .use("/500", serviceWorkPage)
      .use("/404", notFoundPage)
      .start();
  };

  it("check method getRoute", () => {
    router.use("/404", notFoundPage);

    const route = router.getRoute("/404");

    assert.isObject(route);
  });

  it("check method go", () => {
    initRouter();

    router.go("/404");
    router.go("/500");

    expect(window.location.pathname).to.equal("/500");
  });

  it("check method back", () => {
    initRouter();

    router.go("/404");
    router.go("/500");
    router.back();

    expect(window.location.pathname).to.equal("/404");
  });

  it("check method forward", () => {
    initRouter();

    router.go("/404");
    router.go("/500");
    router.back();
    router.forward();

    expect(window.location.pathname).to.equal("/500");
  });

  it("router is singleton", () => {
    assert.deepEqual(router, new Router("#root"));
  });
});
