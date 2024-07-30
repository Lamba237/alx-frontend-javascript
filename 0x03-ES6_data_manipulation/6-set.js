export default function setFromArray(newSet) {
  if (!Array.isArray(newSet)) {
    throw new Error();
  }
  return new Set(newSet);
}
