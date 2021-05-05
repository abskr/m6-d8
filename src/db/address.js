module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("address", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Address;
};
