exports.up = function (knex) {
  return knex.schema.createTable("packages", (packages) => {
    packages.increments();
    packages.timestamp("created_at").defaultTo(knex.fn.now());
    packages.string("carrier").notNullable();
    packages.integer("origin_zip").notNullable();
    packages.string("origin_address").notNullable();
    packages.integer("destination_zip").notNullable();
    packages.string("destination_address").notNullable();
    packages.float("weight_g");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("packages");
};
