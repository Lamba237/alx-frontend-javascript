export default function cleanSet(newSet, startString) {
  const result = [];
  // 1) First iterate over our Set
  for (const value of newSet) {
    // 2) check if a string starts with startString variable
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
