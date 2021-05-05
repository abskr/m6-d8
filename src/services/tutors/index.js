const express = require("express");
const Tutor = require("../../db").Tutor
const Module = require("../../db").Module
const Class = require("../../db").Class
const Student = require("../../db").Student;
const router = express.Router();
const { Op, Sequelize} = require('sequelize')

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Tutor.findAll({
        include : {
          model: Module,
          include: {
            model: Class,
              attributes: { exclude: ['tutorId']},
            include: {
              model: Student,
              through: {
                attributes: []
              }
            }
          }
        }
      });
      res.send(data);




    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Tutor.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Tutor.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      console.log(data);
      res.send(data[1][0]);
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Tutor.destroy({ where: { id: req.params.id } });
      console.log(data);
      if (data > 0) {
        res.send("ok");
      } else {
        res.status(404).send("not found");
      }
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
