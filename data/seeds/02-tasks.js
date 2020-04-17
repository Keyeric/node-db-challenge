exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          task_description: "We break all the things",
          task_notes: "everything is dead",
          completed: false,
        },
        {
          project_id: 1,
          task_description: "We break nothing",
          task_notes: "everything is alive",
          completed: true,
        },
        {
          project_id: 2,
          task_description: "Omae wa mou",
          task_notes: "shindeiru",
          completed: false,
        },
        {
          project_id: 3,
          task_description: "BLAM BLAM",
          task_notes: "he dead",
          completed: true,
        },
      ]);
    });
};
