
exports.up = function(knex) {
    return knex.schema.createTable('results', function(table){
      table.increments('id_result').primary();
      table.string('name_user').notNull();
      table.integer('id_level').notNull().unsigned();
      table.integer('points').notNull();
      table.foreign('id_level').references('levels.id_level');
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('results');
  };
