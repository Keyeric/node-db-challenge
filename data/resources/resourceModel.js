const db = require("../db-config");

module.exports = {
  get,
  getByID,
  insert,
};

function get() {
  return db("resources");
}

function getByID(id) {
  return db("projects").where({ id }).first;
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then((newResource) => {
      return getByID(newResource[0]);
    });
}
