module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define("classes", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Class;
};
