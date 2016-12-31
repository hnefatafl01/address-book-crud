
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', (table) => {
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.string('phone_number');
    table.string('email_address');
    table.string('image_url');
    table.integer('address_id').unsigned().references('address.id').onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contact');
};
