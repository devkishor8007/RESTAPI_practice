const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentsByID);
router.post("/", controller.addStudent);
router.delete("/:id", controller.deleteStudentsByID);
router.put("/:id", controller.updateStudentsByID);

module.exports = router;
