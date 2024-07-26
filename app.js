/* eslint-disable no-unused-vars */
const Env = require("./loaders/environment");
const Database = require("./loaders/database");
const Server = require("./loaders/server");
const Models = require("./models");
const Repositories = require("./repositories");
/**
 * Immediately-invoked function is used as an entry point to give access to command line arguments.
 */
(async () => {
  /**
   * try/catch block is used to initialize the application so we can exit gracefully in case the process fails.
   *
   * dependecy injection pattern is used to inject the configuration (env module).
   * This gives use more loose coupling. In case we want to change the env module we only need to
   * do it in the env module. As long as the interface is the same the rest of our application
   * will be fine.
   */
  try {
    const env = Env();
    const db = await Database(env);
    const models = await Models(db, env);
    const repos = await Repositories(models);
    const server = Server(env, repos);
    server.listen(env.server.port, () => {
      console.log(`Server is running on port ${env.server.port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
