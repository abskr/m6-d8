const express = require("express");
const Student = require("../../db").Student;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Student.bulkCreate([
        { name: "Gentrit", lastname: "Begaj" },
        { name: "Luca", lastname: "Perullo" },
      ]);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });
router.route("/:studentId/classes/:classId").post(async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.studentId);
    const result = await student.addClass(req.params.classId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
