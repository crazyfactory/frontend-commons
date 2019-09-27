import {toSnakeCase} from "./toSnakeCase";

export function toQueryParams(obj: object): {[key: string]: string} {
  if (obj == null) {
    return null;
  }
  const transformed = toSnakeCase(obj);
  const queryParams: {[key: string]: string} = {};
  Object.keys(transformed).forEach((key: string) => {
    if (transformed[key]) {
      queryParams[key] = transformed[key].toString();
    }
  });

  return queryParams;
}
