import {pascalizeKeys, pascalizeStr} from "./pascalize";

describe("pascalize objects", () => {
  it("convert object keys to pascal case", () => {
    const obj = {
      _under_score: "First",
      AlreadyPascal: "Hehe",
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
    expect(pascalizeKeys(obj)).toEqual({
      AlreadyPascal: "Hehe",
      AwesomePlace: "Thailand",
      BeautifulGirl: "Amber",
      First: {
        Ohh: "yeah"
      },
      Last: 99,
      NestedObj: {
        AnotherNest: {
          AsdfXyz: 1000
        },
        Dummy: true,
        LastOfNestedObj: "jjj",
        ThisIsAnotherKey: "asdf"
      },
      ThreeDModule: {
        SomethingWEIRD: "ZZZ"
      },
      UnderScore: "First",
    });
  });

  it("does nothing to null", () => {
    expect(pascalizeKeys(null)).toBeNull();
  });
});

describe("pascalize strings", () => {
  it("pascalizes underscored word", () => {
    expect(pascalizeStr("categories_list__api")).toEqual("CategoriesListApi");
  });

  it("pascalizes hyphenated word", () => {
    expect(pascalizeStr("categories-list--api")).toEqual("CategoriesListApi");
  });

  it("pascalizes spaced word", () => {
    expect(pascalizeStr("categories list  api")).toEqual("CategoriesListApi");
  });

  it("pascalizes camelized word", () => {
    expect(pascalizeStr("categoriesListApi")).toEqual("CategoriesListApi");
  });

  it("does nothing to pascalized word", () => {
    expect(pascalizeStr("CategoriesListApi")).toEqual("CategoriesListApi");
  });
});
