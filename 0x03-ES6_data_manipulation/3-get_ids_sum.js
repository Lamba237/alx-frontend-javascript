export default function getStudentIdsSum(students) {
  // First check if array is empty
  if (!Array.isArray(students)) {
    return [];
  }
  // Using the reduce method to get the sum of the student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
