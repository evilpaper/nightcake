const schemas = require("../schemas");

module.exports = (schemaName) => (req, res, next) => {
  const schema = schemas[schemaName] || null;

  if (schema) {
    const { error } = schema.validate(req.body);
    if (error) {
      res.sendStatus(400);
    } else {
      next();
    }
  } else {
    res.sendStatus(500);
  }
};
