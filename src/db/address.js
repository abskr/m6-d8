// THIS IS FOR 1ON1 RELATION EXAMPLE

module.exports = (sequelize, Datatypes) => {
  const Module = sequalize.define('module', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })
}