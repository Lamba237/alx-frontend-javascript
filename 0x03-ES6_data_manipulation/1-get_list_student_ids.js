export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }

  return arrayObject.map((student) => student.id);
}
