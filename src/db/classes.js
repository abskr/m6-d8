module.exports = (sequelize, Datatypes) => {
  const Module = sequalize.define('module', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    topic: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
}