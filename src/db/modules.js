//THIS IS FOR MODULE TABLE

module.exports  = (sequelize, Datatypes) => {
  const Module = sequalize.define('module', {
    id: {
      type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    starts_at: {
      types: DataTypes.DATE,
      allowNull: false
    },
    ends_at: {
      types: DataTypes.DATE,
      allowNull: false
    }
  })
}