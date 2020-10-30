const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const packagesRouter = require("./packages/packages-router");

const server = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 4000;

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/packages", packagesRouter);

server.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to the SHIP API",
  });
});

server.use((req, res) => {
  res.status(404).json({
    message: "Route was not found",
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "An internal error occurred, please try again later",
  });
});

server.listen(port, host, () => {
  console.log(`\n*** Server Running on http://${host}:${port} ***\n`);
});

module.exports = server;
