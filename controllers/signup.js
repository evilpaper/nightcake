const signup = require("../services/signup");

module.exports = (repos) => async (req, res) => {
  try {
    await signup(req.body, repos.user.create);
    res.sendStatus(201);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
