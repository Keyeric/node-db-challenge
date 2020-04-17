exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "The Blue Fish",
          project_description: "Code a React app to make fish blue",
          completed: false,
        },
        {
          project_name: "Anime Protagonist",
          project_description: "Make a server about anime",
          completed: false,
        },
        {
          project_name: "Conquer the world",
          project_description: "",
          completed: true,
        },
      ]);
    });
};
