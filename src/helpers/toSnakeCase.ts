// tslint:disable:no-invalid-this

export function toSnakeCase(obj: object): {[key: string]: any} {
  if (obj == null) {
    return null;
  }
  obj = JSON.parse(JSON.stringify(obj));
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      obj[key] = toSnakeCase(obj[key]);
    }

    const newKey = key.toSnakeCase();
    if (newKey !== key) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  });

  return obj;
}

String.prototype.toSnakeCase = function(): string {
  return this.split(/(?=[A-Z])/).join("_").toLowerCase();
};
