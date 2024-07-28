export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = array;
  for (const value of array) {
    const idx = array.indexOf(value);
    arrayNew[idx] = appendString + value;
  }

  return array;
}
