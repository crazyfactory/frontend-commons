import {camelizeKeys, camelizeStr} from "./camelize";

describe("camelize object", () => {
  it("convert object keys to camel case", () => {
    const obj = {
      _under_score: "First",
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
    expect(camelizeKeys(obj)).toEqual({
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
      },
      underScore: "First"
    });
  });

  it("does nothing to null", () => {
    expect(camelizeKeys(null)).toBeNull();
  });
});

describe("camelize strings", () => {
  it("camelizes underscored word", () => {
    expect(camelizeStr("categories_list__api")).toEqual("categoriesListApi");
  });

  it("camelizes hyphenated word", () => {
    expect(camelizeStr("categories-list--api")).toEqual("categoriesListApi");
  });

  it("camelizes spaced word", () => {
    expect(camelizeStr("categories list  api")).toEqual("categoriesListApi");
  });

  it("camelizes pascalized word", () => {
    expect(camelizeStr("CategoriesListApi")).toEqual("categoriesListApi");
  });

  it("does nothing to camelized word", () => {
    expect(camelizeStr("categoriesListApi")).toEqual("categoriesListApi");
  });
});
