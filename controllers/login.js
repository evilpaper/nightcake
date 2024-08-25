const login = require("../services/login");

module.exports = (env, repos) => async (req, res, next) => {
  try {
    const token = await login(req.body, env.jwt.secret, repos.user.read);
    res.cookie("accessToken", token, {
      signed: true,
    });
    res.json({ accessToken: token });
  } catch (error) {
    next(error);
  }
};
