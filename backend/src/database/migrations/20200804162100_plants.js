
exports.up = function(knex) {
  
    return knex.schema.createTable('plants', function(table) {
        table.string('name').primary()
        table.json('alias').nullable()
        table.string('imgsrc').nullable()

        table.string('propagation').notNullable()
        table.string('activity').notNullable()

        table.date('lastWatering').notNullable()

        table.integer('waterNeed').notNullable()
        table.integer('sunNeed').notNullable()
        table.integer('shadowNeed').notNullable()
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
        .dropTable("plants")
  };