
exports.up = function(knex) {
    return knex.schema.createTable('locations', function(table){
      table.increments('id_location').primary();
      table.string('image_location').notNull();
      table.string('name_location').notNull()
    })
  };
  
  
  exports.down = function(knex) {
    return knex.schema.dropTable('locations');
  };
