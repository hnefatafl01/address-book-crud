
exports.up = function(knex, Promise) {
  return knex.schema.createTable('address', (table) => {
    table.increments()
    table.string('line_1');
    table.string('line_2');
    table.text('city');
    table.integer('zip')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('address');
};
