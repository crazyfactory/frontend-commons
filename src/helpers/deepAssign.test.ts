import {deepAssign} from "./deepAssign";

describe("deepAssign", () => {
  it("can deep merge object", () => {
    expect(deepAssign({a: {b: 1, c: {d: 2}}}, {a: {c: {d: 3}, e: {f: 4}}})).toEqual({a: {b: 1, c: {d: 3}, e: {f: 4}}});
  });

  it("overrides array", () => {
    expect(deepAssign({a: [1, 2, 3]}, {a: 1})).toEqual({a: 1});
  });

  it("overrides primitive type", () => {
    expect(deepAssign({a: 1}, {a: [1, 2, 3]})).toEqual({a: [1, 2, 3]});
    expect(deepAssign({a: "a"}, {a: [1, 2, 3]})).toEqual({a: [1, 2, 3]});
    expect(deepAssign({a: 1}, {a: 2}, {a: 3}, {a: 4})).toEqual({a: 4});
  });

  it("overrides undefined or null", () => {
    expect(deepAssign({a: undefined}, {a: "a"})).toEqual({a: "a"});
    expect(deepAssign({a: null}, {a: "a"})).toEqual({a: "a"});
  });

  it("defaults to target if param is not object", () => {
    expect(deepAssign({a: 1}, 1)).toEqual({a: 1});
    expect(deepAssign(1, {a: 1})).toEqual(1);
    expect(deepAssign(1, 2)).toEqual(1);
  })
});
