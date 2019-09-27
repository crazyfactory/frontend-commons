// tslint:disable:no-invalid-this

export function toCamelCase(obj: object): object {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = toCamelCase(obj[key]);
    }

    const newKey = key.toCamelCase();
    if (newKey !== key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });

  return obj;
}

String.prototype.toCamelCase = function(): string {
  return this.replace(/(?:^\w|[A-Z]|\b\w|\s+|-)/g, (match, index) => {
    if (/(\s+|_|-)/.test(match)) {
      return "";
    }
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  }).replace(/_+\w/g, (match) => {
    return match[match.length - 1].toUpperCase();
  });
};
