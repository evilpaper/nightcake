const bcrypt = require("bcrypt");

// Global array of users during development
// const users = [];

// Simulate database call during development
// const createUserFake = (data) => {
//   if (users.indexOf(data.email) === -1) {
//     users.push(data.email);
//     return Promise.resolve();
//   }
//   return Promise.reject(Error("Email already exists"));
// };

module.exports = async (data, createUser) => {
  const { email, password } = data;
  const hash = await bcrypt.hash(password, 10);
  await createUser({ email, hash });
};
