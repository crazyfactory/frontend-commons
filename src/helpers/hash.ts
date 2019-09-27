/* eslint-disable no-bitwise */

export const hash = (str: string): number => {
  let hashNum = 0;
  if (str.length === 0) {
    return hashNum;
  }

  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    hashNum = ((hashNum << 5) - hashNum) + char;
    hashNum = hashNum & hashNum; // Convert to 32bit integer
  }
  return hashNum;
};
