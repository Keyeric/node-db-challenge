exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        {
          resource_name: "React",
          resource_description: "JavaScript Wrapper",
        },
        {
          resource_name: "A gun",
          resource_description: "Nothing special about it",
        },
        {
          resource_name: "Power of Friendship",
          resource_description: "Because why not, right?",
        },
      ]);
    });
};
