
exports.up = function(knex) {
  knex.schema.createTable("users", function(table){
    table.increment("id");
  })
};


exports.down = function(knex) {
  
};
