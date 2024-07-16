/* eslint-disable no-unused-vars */
const express = require("express");
const healthController = require("../controllers/health");
const fallbackController = require("../controllers/fallback");
const loginController = require("../controllers/login");
const sigupController = require("../controllers/signup");
const schemaValidator = require("../middlewares/schema-validator");

module.exports = (env) => {
  const app = express();

  app.use("/auth", express.urlencoded());

  app.get("/health", healthController);

  app.post("/auth/login", schemaValidator("login"), loginController);
  app.post("/auth/signup", schemaValidator("signup"), sigupController);

  app.all("*", fallbackController);

  return app;
};
