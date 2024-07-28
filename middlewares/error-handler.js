/* eslint-disable no-unused-vars */
module.exports = (err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
};
