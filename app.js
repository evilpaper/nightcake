const Env = require("./loaders/environment");
const Server = require("./loaders/server");
/**
 * We use an immediately-invoked function as an entry point.
 * This give us access to command line arguments
 */
(async () => {
  /**
   * We use a try/catch block to initialize the application.
   * This so we can exit gracefully in case the process fails.
   */
  try {
    const env = Env();
    /**
     * Why use dependecy injection pattern to inject the env module.
     * This means more loosely-couplingg. In case we want to change the env module we only need to
     * do it in the env module. As long as the interface is the same the rest of our application
     * will be fine.
     */
    const server = Server(env);
    server.listen(env.server.port, () => {
      console.log(`Server is running on port ${env.server.port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
