/* eslint-disable no-undef */
const Sequelize = require("sequelize");
const Database = require("../../loaders/database");

jest.mock("sequelize", () => {
  return jest.fn(() => {
    return {
      authenticate: jest.fn(),
    };
  });
});

afterEach(() => jest.clearAllMocks());

const env = {
  database: {
    name: "foo",
    usser: "bar",
    password: "baz",
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    logging: true,
    sync: true,
  },
};

test("it should invoke the Sequelize constructor", async () => {
  const { name, user, password, host, port, dialect, logging } = env.database;

  await Database(env);

  expect(Sequelize).toHaveBeenCalledWith(name, user, password, {
    host,
    port,
    dialect,
    logging,
  });
});

test("it should invoke the authentication handler", async () => {
  const db = await Database(env);

  expect(db.authenticate).toHaveBeenCalledTimes(1);
});
