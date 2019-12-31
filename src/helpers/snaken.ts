export function snakenKeys(obj: object, exceptions: string[] = []): {[key: string]: any} {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).filter((k) => !exceptions.includes(k)).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = snakenKeys(obj[key], exceptions);
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
