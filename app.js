const Env = require("./loaders/environment");
const Server = require("./loaders/server");
/**
 * Immediately-invoked function as an entry point.
 * The entry point job is to start the execution and have access to command line arguments
 *
 * Initialization happens within the try/catch block.
 * Take care of all necessary steps for the service to run such as,
 * start the web server, load configuration, establish database connection, and so on.
 */
(async () => {
  try {
    const env = Env();
    const server = Server(env);
    // Initialization
    server.listen(env.server.port, () => {
      console.log(`Server is running on port ${env.server.port}`);
    });
  } catch (error) {
    console.log(error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
})();
