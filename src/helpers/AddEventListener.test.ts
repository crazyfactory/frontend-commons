import {AddEventListener} from "./AddEventListener";

describe("AddEventListener", () => {
  it("addEventListener() registers event", () => {
    const mock = jest.fn();
    const listener = new AddEventListener();
    listener.addEventListener("scroll", mock);
    expect(listener.isRegistered("scroll")).toBeTruthy();
  });

  it("removeEventListener() de-registers event", () => {
    const mock = jest.fn();
    const listener = new AddEventListener();
    listener.addEventListener("scroll", mock);
    listener.removeEventListener("scroll");
    expect(listener.isRegistered("scroll")).toBeFalsy();
  });

  it("isRegistered() returns false for non-registered event", () => {
    const listener = new AddEventListener();
    expect(listener.isRegistered("scroll")).toBeFalsy();
  });

  it("trigger() calls registered event with correct param", () => {
    const mock = jest.fn();
    const listener = new AddEventListener();
    listener.addEventListener("scroll", mock);
    expect(mock).not.toHaveBeenCalled();
    listener.trigger("scroll", "param");
    expect(mock).toHaveBeenCalledWith("param");
  });

  it("trigger() throws error when trying to call unregistered event", () => {
    const listener = new AddEventListener();
    expect(() => { listener.trigger("scroll", "param"); }).toThrow("scroll is not registered");
  });
});
