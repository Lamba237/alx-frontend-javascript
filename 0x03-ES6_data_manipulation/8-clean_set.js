export default function cleanSet(newSet, startString) {
  const result = [];

  if (typeof newSet !== 'object' || typeof startString !== 'string') {
    return '';
  }
  // 1) First iterate over our Set
  for (const value of newSet) {
    // 2) check if a string starts with startString variable
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  }
  return result.join('-');
}
