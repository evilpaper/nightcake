/* eslint-disable no-unused-vars */
const express = require("express");
const healthController = require("../controllers/health");

module.exports = (env) => {
  const app = express();

  app.get("/health", healthController);

  return app;
};
