
exports.up = function(knex) {
    return knex.schema.createTable('results', function(table){
      table.increments('id_result').primary();
      table.integer('id_user').notNull().unsigned();
      table.integer('id_level').notNull().unsigned();
      table.integer('points').notNull();
      table.foreign('id_user').references('users.id_user');
      table.foreign('id_level').references('levels.id_level');
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('results');
  };
