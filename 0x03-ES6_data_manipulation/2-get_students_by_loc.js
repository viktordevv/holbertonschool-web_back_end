/* Create a function getStudentsByLocation that returns an array
 */

export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    return array.filter((student) => student.location === city);
  }
  return [];
}
