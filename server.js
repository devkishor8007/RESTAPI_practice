const express = require("express");
const studentROutes = require("./src/student/router");
const app = express();

// middleware to get json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/students", studentROutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App Listening at port ${PORT}`);
});
