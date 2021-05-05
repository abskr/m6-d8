const route = require("express").Router();

const studentsRoute = require("./students");
const tutorsRoute = require("./tutors");
const modulesRoute = require("./modules");
const classesRoute = require("./classes");
route.use("/tutors", tutorsRoute);
route.use("/modules", modulesRoute);
route.use("/students", studentsRoute);
route.use("/classes", classesRoute);
module.exports = route;
