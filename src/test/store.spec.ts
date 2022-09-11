import { store, StoreEvents } from "./../utils/store";
import { expect } from "chai";

describe("Store", () => {
  store.on(StoreEvents.UPDATED, () => {});

  const firstName = "Ivan";
  const phone = 79997773311;
  const userObject = {
    login: "some login",
    email: "some email",
    first_name: "Ivan",
    second_name: "Popov",
    display_name: "Ivan Popov",
    phone: "777",
    avatar: "some url",
  };

  it("set string value", () => {
    store.setState("user.first_name", firstName);

    const result = store.getState().user?.first_name;

    expect(result).to.equal(firstName);
  });

  it("set object value", () => {
    store.setState("user", userObject);

    const result = store.getState().user;

    expect(result).to.equal(userObject);
  });

  it("set number value", () => {
    store.setState("user.phone", phone);

    const result = store.getState().user?.phone;

    expect(result).to.equal(phone);
  });

  it("reset store", () => {
    store.setState("user.first_name", "Ivan");
    store.removeState();

    const result = store.getState().user?.first_name;

    expect(result).to.equal(undefined);
  });

  it("rewrite value", () => {
    store.setState("user.first_name", "Ivan");
    store.setState("user.first_name", "Denis");

    const result = store.getState().user?.first_name;

    expect(result).to.equal("Denis");
  });
});
