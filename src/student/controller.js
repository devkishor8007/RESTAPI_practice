const pool = require("../../db");
const query = require("./queries");

const getStudents = (req, res) => {
  pool.query(query.getStudents, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getStudentsByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getStudentsBYId, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, age, dob } = req.body;

  pool.query(query.checkNameExists, [name], (error, result) => {
    if (result.rows.length) {
      res.send("Name already exits");
    }
    // add data to db
    pool.query(query.addStudent, [name, age, dob], (error, result) => {
      if (error) throw error;
      res.status(201).send("Succesully added");
    });
  });
};

const deleteStudentsByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getStudentsBYId, [id], (error, result) => {
    const noDataFound = !result.rows.length;

    if (noDataFound) {
      res.status(200).send("Not Found the data");
    } else {
      pool.query(query.deleteStudent, [id], (error, result) => {
        if (error) throw error;
        res.status(200).send("Successfully Deleted!");
      });
    }
  });
};

const updateStudentsByID = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(query.getStudentsBYId, [id], (err, result) => {
    const noDataFound = !result.rows.length;
    if (noDataFound) {
      res.status(200).send("Doesnot exist");
    } else {
      pool.query(query.updateStudent, [name, id], (err, result) => {
        if (err) throw error;
        res.status(200).send("Successfully Updated!");
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentsByID,
  addStudent,
  deleteStudentsByID,
  updateStudentsByID,
};
