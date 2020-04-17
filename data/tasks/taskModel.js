const db = require("../db-config");

module.exports = {
  get,
  getByID,
  insert,
};

function get() {
  return db("tasks");
}

function getByID(id) {
  return db("projects").where({ id }).first;
}

function insert(task) {
  return db("tasks")
    .insert(task)
    .then((newTask) => {
      return getByID(newTask[0]);
    });
}
