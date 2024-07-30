export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error();
  }

  const typeArray = new ArrayBuffer(length);
  const val = new DataView(typeArray);

  try {
    val.setInt8(position, value);
  } catch (e) {
    throw Error('Position outside range');
  }
  return val;
}
