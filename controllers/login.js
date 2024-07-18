/* eslint-disable no-unused-vars */
const login = require("../services/login");

module.exports = (env) => async (req, res) => {
  try {
    const token = await login(req.body, env.jwt.secret);
    if (token) {
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
