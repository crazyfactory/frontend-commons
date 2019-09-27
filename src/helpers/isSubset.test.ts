import {isSubset} from "./isSubset";

describe("isSubset()", () => {
  it("returns true if an object is subset of other", () => {
    expect(
      isSubset({key: "world"}, {key: "world"})
    ).toBeTruthy();
    expect(
      isSubset({key: {nested: {key: "hello"}}, value: {nested: "value"}}, {value: {nested: "value"}})
    ).toBeTruthy();
  });

  it("returns true if an object contains subset array", () => {
    expect(
      isSubset({key: ["a", "b", "c"], value: "v"}, {key: ["a", "b"]})
    ).toBeTruthy();
  });

  it("returns false if subset array is not ordered correctly", () => {
    expect(
      isSubset({key: ["a", "b", "c"], value: "v"}, {key: ["b", "a"]})
    ).toBeFalsy();
  });

  it("returns false if an object is subset of other", () => {
    expect(isSubset({key: "hello"}, {key: "world"})).toBeFalsy();
    expect(isSubset({key: {nested: {key: "hello"}}, value: {nested: "world"}}, {key: {nested: "world"}})).toBeFalsy();
  });

  it("returns false if the object is null or not object", () => {
    expect(isSubset(new Date(), null)).toBeFalsy();
    expect(isSubset({key: "value"}, null)).toBeFalsy();
    expect(isSubset({}, null)).toBeFalsy();
  });

  it("returns false if date inside an object doesn't match instance", () => {
    expect(isSubset(new Date(1000), new Date(1001))).toBeFalsy();
    expect(isSubset({key: new Date(15)}, {key: new Date(10)})).toBeFalsy();
    expect(isSubset({key: {value: {nested: new Date(20)}}}, {key: {value: {nested: new Date(25)}}})).toBeFalsy();
  });
});
