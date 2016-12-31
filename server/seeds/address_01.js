
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('address').del()
    .then(function () {
      const addresses = [{
          line_1: '1644 Platte Street',
          line_2: '',
          city: 'Denver',
          zip: 80202
        },{
          line_1: 'Villard St.',
          line_2: '',
          city: 'Bozeman',
          zip: 59718
        },{
          line_1: 'Cascade Ave',
          line_2: '',
          city: 'Billings',
          zip: 59102
      }]
    return knex('address').insert(addresses);
  });
};
