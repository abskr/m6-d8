const express = require("express");
const Module = require('../../db').Module
const Class = require('../../db').Class
// Operator = 'op'
// docs = https://sequelize.org/master/manual/model-querying-basics.html#operators
const {Op} = require('sequalize')
const router = express.Router();

// DOCS: Model Querying - https://sequelize.org/master/manual/model-querying-basics.html
// This route is 'chained'


router
  .route("/")
  // Simple SELECT queries
  .get(async (req, res, next) => {
    try {
      // 'include' to populate
      // 'model' to project which model
      // this needs some fix...
      const data = await Module.findAll({
        where: {name: {[Op.iLike]: "%" + req.query.name + "%"}},
        include: {
          model: Class,
          where: {
            name: {[Op.iLike]: "%" + req.query.name + "%"}
          },
          include: {
            model: Student,
            through: {
              attributes: []
            }
          }
        }
      })
    } catch (e) {
      console.log(e);
    }
  })
  // Simple INSERT queries
  .post(async (req, res, next) => {
    try {
      const data = await Module.create(req.body)
      res.send(data)
    } catch (e) {
      console.log(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Module.findByPk(req.params.if)
    } catch (e) {
      console.log(e);
    }
  })

  // Simple UPDATE queries
  .put(async (req, res, next) => {
    try {
      const data = await Module.update(req.body, {
        where: {id : req.params.id},
        // so it doenst only return the number of the row
        returning: true, // returning the updated data
        plain: true // prevent returning the number of the row (plain: {default: true})
      })
      res.send(data[1][0]);
      // since 'data' returning an array in default, target only the object inside it
    } catch (e) {
      console.log(e);
    }
  })

  // simple DESTROY
  .delete(async (req, res, next) => {
    try {
      const data = await Module.destroy({where: {id: req.params.id}})
      if (data>0){
        res.send(data);
      } else {
        res.status(404).send('not found')
      }
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
