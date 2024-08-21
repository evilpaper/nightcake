const Sequelize = require("sequelize");

module.exports = async (db, env) => {
  const UserModel = db.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  /**
   * force: false creates the table if it doesn't exist (and does nothing if it already exists)
   * force: true creates the table, dropping it first if it already existed
   */

  await UserModel.sync({ force: env.database.sync });

  return UserModel;
};
