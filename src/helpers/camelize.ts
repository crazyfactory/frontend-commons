export function camelizeKeys(obj: object, exceptions: string[] = []): object {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).filter((k) => !exceptions.includes(k)).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = camelizeKeys(obj[key], exceptions);
    }

    const newKey = camelizeStr(key);
    if (newKey !== key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });

  return obj;
}

export function camelizeStr(str: string): string {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+|-)/g, (match, index) => {
    if (/(\s+|_|-)/.test(match)) {
      return "";
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }).replace(/_+\w/g, (match) => {
    return match[match.length - 1].toUpperCase();
  });
}
