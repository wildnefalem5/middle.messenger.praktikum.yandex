import Block from "./block";
import { expect } from "chai";

class Text extends Block<{}> {
  render() {
    return this.compile(() => "string content", this._props);
  }
}

describe("Test component which was extend from block", () => {
  const text = new Text("div", {});

  it("check text", () => {
    const element = text.getContent();

    expect(element.textContent).to.equal("string content");
  });

  it("check instance from which extended", () => {
    expect(text instanceof Block).to.equal(true);
  });
});
