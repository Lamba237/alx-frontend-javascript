export default function hasValuesFromArray(newSet, newArray) {
  // Implementation goes in here:
  return newArray.every((element) => newSet.has(element));
}
