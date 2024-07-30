export default function cleanSet(set, startString) {
  const setStrings = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);

      if (subStr && subStr !== value) {
        setStrings.push(subStr);
      }
    }
  }
  return setStrings.join('-');
}
