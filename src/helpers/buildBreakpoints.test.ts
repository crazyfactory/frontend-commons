import {buildBreakpoints, IBreakpoint} from "./buildBreakpoints";

describe("buildBreakpoints()", () => {
  it("returns empty object if breakpoints is empty", () => {
    const breakpoints = buildBreakpoints([]);
    expect(breakpoints).toEqual({});
  });

  it("returns correct breakpoints", () => {
    interface ITestBreakpoint extends IBreakpoint {
      fontSize: number;
    }

    const breakpoint1: ITestBreakpoint = {minScreenWidth: 480, fontSize: 12};
    const breakpoint2: ITestBreakpoint = {minScreenWidth: 640, fontSize: 14};
    const breakpoint3: ITestBreakpoint = {minScreenWidth: 1024, fontSize: 16};

    const breakpoints = buildBreakpoints([breakpoint1, breakpoint2, breakpoint3]);

    // tslint:disable:object-literal-sort-keys
    expect(breakpoints).toEqual({
      $nest: {
        "@media screen and (min-width: 480px)": {
          fontSize: 12
        },
        "@media screen and (min-width: 640px)": {
          fontSize: 14
        },
        "@media screen and (min-width: 1024px)": {
          fontSize: 16
        }
      }
    });
    // tslint:enable:object-literal-sort-keys
  });
});
