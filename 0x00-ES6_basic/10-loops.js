export default function appendToEachArrayValue(array, appendString) {
  let index = 0; // use to keep track of the current index

  for (let value of array) {
    array[index] = appendString + value;
    index++;
  }

  return array;
}
