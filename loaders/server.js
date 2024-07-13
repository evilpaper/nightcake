/* eslint-disable no-unused-vars */
const express = require("express");
const healthController = require("../controllers/health");
const fallbackController = require("../controllers/fallback");

module.exports = (env) => {
  const app = express();

  app.get("/health", healthController);
  app.all("*", fallbackController);

  return app;
};
