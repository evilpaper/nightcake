const UserRepositories = require("./user");

module.exports = (models) => ({ user: UserRepositories(models.user) });
