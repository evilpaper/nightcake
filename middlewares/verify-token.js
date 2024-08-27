const jwt = require("jsonwebtoken");

module.exports = (env) => (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) return res.status(403).send("Token is missing");

  jwt.verify(accessToken, env.jwt.secret, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = decoded;
    res.send("User authorized.");
  });

  next();
};
