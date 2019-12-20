function isObject(item: any): item is Record<string | number, any> {
  return (item && typeof item === "object" && !Array.isArray(item));
}

// from https://stackoverflow.com/a/34749873/5561369
// should be used with care, you should make sure that target and sources are simple objects
// see https://stackoverflow.com/a/28248548/5561369
export function deepAssign(target: any, ...sources: any[]): any {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {[key]: {}});
        }
        deepAssign(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    });
  }

  return deepAssign(target, ...sources);
}
