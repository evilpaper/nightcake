const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUserFake = async (email) => {
  let user = {};

  user.id = 1;
  user.email = "user@mail.com";
  user.hash = await bcrypt.hash("helloworld", 10);

  return Promise.resolve(email === user.email ? user : null);
};

module.exports = async (data, secret) => {
  const user = await getUserFake(data.email);
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
