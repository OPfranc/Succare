
exports.up = function(knex) {
  
    return knex.schema.createTable('plants', function(table) {
        table.string('name').primary()
        table.json('alias').nullable()
        table.string('imgsrc').nullable()
        table.string('light').notNullable()
        table.string('propagation').notNullable()
        table.string('activity').notNullable()
        table.string('water').notNullable()
        table.string('info')
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("plants")
  };