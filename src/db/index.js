const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  { port: process.env.PGPORT, host: process.env.PGHOST, dialect: "postgres" }
);

const Student = require("./students")(sequelize, DataTypes);
const Module = require("./modules")(sequelize, DataTypes);
const Class = require("./classes")(sequelize, DataTypes);
const Adress = require("./classes")(sequelize, DataTypes);

// This is how to declare the relationship
// This is also populate, without adding col in the 'model'
// Something to do with 'which one IS the foreign key'
Class.belongsTo(Module)
Module.hasMany(Class)

Adress.hasOne(Student)
Student.belongsTo(Adress)

// This will genereate a 'relation table' without making a model
Class.belongsToMany(Student, {through: "StudentClass", timestamps: false})
Student.belongsToMany(Class, {through: "StudentClass", timestamps: false})

sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log(e));

module.exports = {sequelize, Student, Module, Class, Adress};
