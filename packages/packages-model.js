const db = require("../data/config");

function get() {
  return db("packages");
}

function getById(package_id) {
  return db("packages as p").where({ "p.id": package_id }).first();
}

async function add(package) {
  const [id] = await db("packages").insert(package);

  return db("packages").where({ id }).first();
}

async function update(package_id, changes) {
  await db("packages as p").where({ "p.id": package_id }).update(changes);

  return getById(package_id);
}

function del(package_id) {
  return db("packages as p").where({ "p.id": package_id }).del();
}

module.exports = {
  get,
  getById,
  add,
  update,
  del,
};
