export const isSubset = (superset, subset) => {
  if (typeof superset !== "object" || superset === null || typeof subset !== "object" || subset === null) {
    return false;
  }

  if (superset instanceof Date || subset instanceof Date) {
    return superset.valueOf() === subset.valueOf();
  }

  return Object.keys(subset).every((key) => {
    if (!superset.propertyIsEnumerable(key)) {
      return false;
    }
    const subsetItem = subset[key];
    const supersetItem = superset[key];
    return !(
      typeof subsetItem === "object" && subsetItem !== null
        ? !isSubset(supersetItem, subsetItem)
        : supersetItem !== subsetItem
    );
  });
};
