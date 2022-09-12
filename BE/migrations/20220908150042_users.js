
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
      table.increments('id_user').primary();
      table.string('first_name').notNull();
      table.string('last_name').notNull();
      table.string('email').notNull();
      table.string('password').notNull()
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
