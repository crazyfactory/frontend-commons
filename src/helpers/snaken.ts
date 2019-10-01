// tslint:disable:no-invalid-this

export function snakenKeys(obj: object): {[key: string]: any} {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = snakenKeys(obj[key]);
    }

    const newKey = snakenStr(key);
    if (newKey !== key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });

  return obj;
}

export function snakenStr(str: string): string {
  return str.split(/(?=[A-Z])/).join("_").toLowerCase();
}
