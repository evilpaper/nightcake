const signup = require("../services/signup");

/* eslint-disable no-unused-vars */
module.exports = async (req, res) => {
  try {
    await signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    console.log(req.body);
    res.sendStatus(501);
  }
};
