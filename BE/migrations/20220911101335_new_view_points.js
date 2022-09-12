exports.up = function(knex) {
    return knex.schema.createView('points_per_user',function(view){
      view.columns(['level','user','total_points','high_score']);
      view.as(knex('results').join('levels','results.id_level','=','levels.id_level').select('levels.level_name','results.name_user',(knex.raw("SUM(results.points)")),knex.raw("MAX(results.points)")).groupBy('levels.level_name','results.name_user'))
    })
  };
  
  
  exports.down = function(knex) {
      return knex.schema.dropView("points_per_user");
  };