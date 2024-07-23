export default function appendToEachArrayValue(array, appendString) {
  for (let [index, value] of array.entries()) {
	  //array.entries() gets both the index and value
    array[index] = appendString + value;
  }

  return array;
}
