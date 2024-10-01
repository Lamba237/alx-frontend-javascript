export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  for (const idx of array) {
    newArray[newArray.indexOf(idx)] = appendString + idx;
  }
  return newArray;
}
