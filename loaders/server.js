const express = require("express");
const healthController = require("../controllers/health");
const fallbackController = require("../controllers/fallback");
const loginController = require("../controllers/login");
const sigupController = require("../controllers/signup");
const schemaValidator = require("../middlewares/schema-validator");
const errorHandlerMiddleware = require("../middlewares/error-handler");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const document = YAML.load("./openapi.yaml");
const cookieParser = require("cookie-parser");

module.exports = (env, repos) => {
  const app = express();

  // Custom middleware
  app.use((req, _res, next) => {
    console.log(`Processing request for ${req.url}...`);
    next();
  });
  app.use(cookieParser(env.cookie.secret));
  app.use("/auth", express.urlencoded());
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(document));

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
