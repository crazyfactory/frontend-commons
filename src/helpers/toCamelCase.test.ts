import {toCamelCase} from "./toCamelCase";

describe("toCamelCase", () => {
  it("convert object keys to camel case", () => {
    const obj = {
      awesome_place: "Thailand",
      beautiful_girl: "Amber",
      first: {
        ohh: "yeah"
      },
      last: 99,
      nested_obj: {
        another_nest: {
          asdf_xyz: 1000
        },
        dummy: true,
        last_of_nested_obj: "jjj",
        this_is_another_key: "asdf"
      },
      three_d_module: {
        something_w_e_i_r_d: "ZZZ"
      }
    };
    expect(toCamelCase(obj)).toEqual({
      awesomePlace: "Thailand",
      beautifulGirl: "Amber",
      first: {
        ohh: "yeah"
      },
      last: 99,
      nestedObj: {
        anotherNest: {
          asdfXyz: 1000
        },
        dummy: true,
        lastOfNestedObj: "jjj",
        thisIsAnotherKey: "asdf"
      },
      threeDModule: {
        somethingWEIRD: "ZZZ"
      }
    });
  });
});
