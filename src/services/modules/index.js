const express = require("express");
const Module = require("../../db").Module;
const Class = require("../../db").Class;
const Student = require("../../db").Student;
const { Op, Sequelize } = require("sequelize");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Module.findAll({
        where: {
          [Op.or]: [
            { name: { [Op.iLike]: "%" + req.query.name + "%" } },
            {
              classes: Sequelize.where(Sequelize.col(`"classes".topic`), {
                [Op.iLike]: "%" + req.query.className + "%",
              }),
              // {
              //   where: {
              //     "classes.topic": {
              //       [Op.iLike]: "%" + req.query.className + "%",
              //     },
              //   },
              // },
            },
          ],
        },
        include: {
          model: Class,
          // where: {
          //   [Op.or]: [
          //     { topic: { [Op.iLike]: "%" + req.query.className + "%" } },
          //   ],
          // },
          include: { model: Student, through: { attributes: [] } },
        },
      });
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Module.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Module.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Module.update(req.body, {
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
      const data = await Module.destroy({ where: { id: req.params.id } });
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
