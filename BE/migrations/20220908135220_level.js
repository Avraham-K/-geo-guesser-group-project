
exports.up = function(knex) {
  return knex.schema.createTable('levels', function(table){
    table.increments('id_level').primary();
    table.string('level_name').notNull();
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('levels');
};
