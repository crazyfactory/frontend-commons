import {camelizeStr} from "./camelize";

export function pascalizeKeys(obj: object): object {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = pascalizeKeys(obj[key]);
    }

    const newKey = pascalizeStr(key);
    if (newKey !== key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });

  return obj;
}

export function pascalizeStr(str: string): string {
  const camelized = camelizeStr(str);
  return camelized.replace(camelized[0], camelized[0].toUpperCase());
}
