const db = require("../db-config");

module.exports = {
  get,
  getByID,
  insert,
};

function get() {
  return db("projects");
}

function getByID(id) {
  return db("projects").where({ id }).first;
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then((newProject) => {
      return getByID(newProject[0]);
    });
}
