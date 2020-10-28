module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    connection: {
      filename: "./data/ship-dev.db3",
    },
  },
  test: {
    client: "sqlite3",
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    connection: {
      filename: "./data/ship-test.db3",
    },
  },
};
