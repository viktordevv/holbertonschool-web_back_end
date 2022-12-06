/* Create a function getListStudentIds that returns an array of ids from a list */

export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map((student) => student.id);
  }
  return [];
}
