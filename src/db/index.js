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
const Address = require("./address")(sequelize, DataTypes);
Module.hasMany(Class);
Class.belongsTo(Module);

Student.hasOne(Address);
Address.belongsTo(Student);
Class.belongsToMany(Student, { through: "StudentClass", timestamps: false });
Student.belongsToMany(Class, { through: "StudentClass", timestamps: false });
sequelize
  .authenticate()
  .then(() => console.log("Connection established"))
  .catch((e) => console.log(e));

module.exports = { sequelize, Student, Module, Class, Address };
