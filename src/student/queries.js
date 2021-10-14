const getStudents = "SELECT * FROM student";

const addStudent = "INSERT INTO student(name,age,dob) VALUES($1,$2,$3)";

const checkNameExists = "SELECT * FROM student WHERE student.name = $1";

const getStudentsBYId = "SELECT * FROM student WHERE id = $1";

const deleteStudent = "DELETE FROM student WHERE id = $1";

const updateStudent = "UPDATE student SET name = $1 WHERE id= $2";

module.exports = {
  getStudents,
  getStudentsBYId,
  checkNameExists,
  addStudent,
  deleteStudent,
  updateStudent,
};
