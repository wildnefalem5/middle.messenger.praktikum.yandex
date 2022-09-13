import { HTTPTransport } from "./http-transport";
import { expect } from "chai";

describe("test http-transport", () => {
  const http = new HTTPTransport("https://ya-praktikum.tech/api/v2");

  it("check sign in method", () => {
    let result;

    http
      .post("/auth/signin", {
        data: { login: "test1111", password: "123456789" },
        headers: { "Content-Type": "application/json" },
      })
      .then((user) => {
        result = user;
      });

    expect(!!result).to.equal(true);
  });
});
