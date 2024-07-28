const express = require("express");
const healthController = require("../controllers/health");
const fallbackController = require("../controllers/fallback");
const loginController = require("../controllers/login");
const sigupController = require("../controllers/signup");
const schemaValidator = require("../middlewares/schema-validator");
const errorHandlerMiddleware = require("../middlewares/error-handler");

module.exports = (env, repos) => {
  const app = express();

  app.use("/auth", express.urlencoded());

  app.get("/health", healthController);

  app.post(
    "/auth/login",
    schemaValidator("login"),
    loginController(env, repos)
  );
  app.post("/auth/signup", schemaValidator("signup"), sigupController(repos));

  app.all("*", fallbackController);

  app.use(errorHandlerMiddleware);

  return app;
};
