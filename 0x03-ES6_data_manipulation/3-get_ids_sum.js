/* Create a function getStudentIdsSum that returns the sum of all the student ids */

export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((sum, student) => sum + student.id, 0);
  }
  return [];
}
