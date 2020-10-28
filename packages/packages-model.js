const db = require("../data/config");

function get() {
  return db("packages");
}

module.exports = {
  get,
};
