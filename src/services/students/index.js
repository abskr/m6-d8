const express = require("express");
const Student = require('../../db').Student
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
      const data = await Student.bulkCreate([{
        name: "Gentrit",
        lastname: "Begaj"
      }, {
        name: "Luca",
        lastname: "Perulo"
      }, ])
      res.send(data)
    } catch (e) {
      console.log(e);
    }
  });

// make a route for the class_student relation (many-to-many)
// Special methods/mixins
router.route('/:studentId/classes/:classId').post (async (req, res, next) => {
  try {
    const Student = await Student.findByPk(req.params.id)
    student.addClass(req.params.classId)
  } catch (error) {
    console.log(error)
  }
})

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
