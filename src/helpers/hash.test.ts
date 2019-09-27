import {hash} from "./hash";

const randAlpha = (): string => {
  let rand = "";
  for (let i = 0; i < 25; i += 1) {
    const randInt: number = Math.floor(Math.random() * 26);
    rand = rand.concat(String.fromCharCode(randInt + 65));
  }
  return rand;
};

describe("hash()", () => {
  it("returns same data for same string", () => {
    const dummyStrings: string[] = [];
    for (let i = 0; i < 10; i += 1) {
      dummyStrings.push(randAlpha());
    }
    dummyStrings.forEach((str) => {
      expect(hash(str)).toBe(hash(str));
    });
  });

  it("Returns different data for different string", () => {
    expect(hash("myDummyString")).not.toBe(hash("DummyString"));
    expect(hash("myDummyString")).not.toBe(hash("myDummy"));
    expect(hash("myString")).not.toBe(hash("myDummyString"));
    expect(hash("myDummyString")).not.toBe(hash("myString"));
  });

  it("returns 0 for empty string", () => {
    expect(hash("")).toBe(0);
  });
});
