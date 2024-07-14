/* eslint-disable no-unused-vars */
const express = require("express");
const healthController = require("../controllers/health");
const fallbackController = require("../controllers/fallback");
const loginController = require("../controllers/login");
const sigupController = require("../controllers/signup");

module.exports = (env) => {
  const app = express();

  app.get("/health", healthController);
  app.post("/auth/login", loginController);
  app.post("/auth/signup", sigupController);
  app.all("*", fallbackController);

  return app;
};
