const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  } , {timestaps: false} ); //timestamp default is true
  return Student;
};
