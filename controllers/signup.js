const signup = require("../services/signup");

/* eslint-disable no-unused-vars */
module.exports = (repos) => async (req, res) => {
  try {
    await signup(req.body, repos.user.create);
    res.sendStatus(201);
  } catch (error) {
    console.log(req.body);
    res.sendStatus(501);
  }
};
