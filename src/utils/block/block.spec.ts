import { Button } from "./../../components/button";
import Block from "./block";
import { expect } from "chai";


describe("Test component which was extend from block", () => {
  const button = new Button("button", {
    text: "Text",
    attr: {
      class: "button",
      type: "button",
    },
  });

  it("check text inside button", () => {
    const element = button.getContent();

    expect(element.textContent).to.equal("Text");
  });

  it("check instance from which extended button", () => {
    const element = button.getContent();

    expect(element instanceof Block).to.equal(true);
  });
});
