exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id"); //Unique ID
      table.text("project_name").notNullable();
      table.text("project_description");
      table.boolean("completed").notNullable().defaultTo(false);
    })

    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      tbl.text("task_description").notNullable();
      tbl.text("task_notes");
      tbl.boolean("completed").notNullable().defaultTo(false);
    })

    .createTable("resources", (tabl) => {
      tabl.increments("resource_id");
      tabl.text("resource_name").notNullable().unique;
      tabl.text("resource_description");
    })

    .createTable("connection", (table) => {
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("connection");
};
