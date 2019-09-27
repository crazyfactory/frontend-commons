import {CSSProperties, NestedCSSProperties, NestedCSSSelectors} from "typestyle/lib/types";

export interface IBreakpoint extends CSSProperties {
  minScreenWidth: number;
}

export const buildBreakpoints = (breakpoints: IBreakpoint[]): NestedCSSProperties => {
  const nested: NestedCSSSelectors = {};
  if (breakpoints.length === 0) {
    return {};
  }
  for (const breakpoint of breakpoints) {
    const cssProperties = {...breakpoint};
    delete cssProperties.minScreenWidth;
    nested[`@media screen and (min-width: ${breakpoint.minScreenWidth || 0}px)`] = cssProperties;
  }
  return {$nest: nested};
};

export const buildBreakpointsInNest = (breakpoints: IBreakpoint[]): NestedCSSSelectors => {
  const nested: NestedCSSSelectors = {};
  if (breakpoints.length === 0) {
    return {};
  }
  for (const breakpoint of breakpoints) {
    const cssProperties = {...breakpoint};
    delete cssProperties.minScreenWidth;
    nested[`@media screen and (min-width: ${breakpoint.minScreenWidth || 0}px)`] = cssProperties;
  }
  return nested;
};
