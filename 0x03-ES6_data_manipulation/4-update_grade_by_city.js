/* Create a function updateStudentGradeByCity that returns an array */

export default function updateStudentGradeByCity(array, city, newGrades) {
  if (Array.isArray(array)) {
    return array
      .filter((student) => student.location === city)
      .map((student) => {
        const grade = newGrades.find((grade) => grade.studentId === student.id);
        return { ...student, grade: grade ? grade.grade : 'N/A' };
      });
  }
  return [];
}
