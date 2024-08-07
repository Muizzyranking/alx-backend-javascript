export default function updateGradeByCity(students, city, newGrades) {
  const filtertedStudents = students.filter((student) => student.location === city);

  const newStudents = filtertedStudents.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return newStudents;
}
