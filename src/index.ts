export {Breakpoints} from "./constants/Breakpoints";
export {Color} from "./constants/Color";
export {CommonCss} from "./constants/CommonCss";
export {FontSize} from "./constants/FontSize";
export {FontWeight} from "./constants/FontWeight";
export {MAX_WIDTH} from "./constants/MaxWidth";
export {ZIndex} from "./constants/ZIndex";
export {AddEventListener} from "./helpers/AddEventListener";
export {buildBreakpoints} from "./helpers/buildBreakpoints";
export {delayPromise} from "./helpers/delayPromise";
export {hash} from "./helpers/hash";
export {isSubset} from "./helpers/isSubset";
export {processResponse} from "./helpers/processResponse";
export {processSagaError} from "./helpers/processSagaError";
export {toCamelCase} from "./helpers/toCamelCase";
export {toQueryParams} from "./helpers/toQueryParams";
export {toSnakeCase} from "./helpers/toSnakeCase";
export {uuid} from "./helpers/uuid";
export {ApiError} from "./models/ApiError";

/* eslint-disable @typescript-eslint/interface-name-prefix */
declare global {
  interface String {
    toCamelCase(): string;
    toSnakeCase(): string;
  }
}
