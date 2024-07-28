const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (data, secret, getUser) => {
  const user = await getUser(data.email);
  if (!user) {
    return null;
  }
  const isMatching = await bcrypt.compare(data.password, user.hash);
  if (!isMatching) {
    return null;
  }
  const token = jwt.sign({ id: user.id }, secret, { expiresIn: "1h" });
  return token;
};
