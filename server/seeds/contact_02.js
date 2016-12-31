
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      const contacts = [{
          first_name: 'cj',
          last_name: 'reynolds',
          phone_number: '406-600-7788',
          email_address: 'cjr@happymail.com',
          image_url:'https://placebear.com/200/300',
          address_id: 1
        },{
          first_name: 'kevin',
          last_name: 'erickson',
          phone_number: '406-611-7788',
          email_address: 'kevin@happymail.com',
          image_url:'https://placebear.com/300/300',
          address_id: 2
        },{
          first_name: 'pops',
          last_name: 'viking',
          phone_number: '406-622-7788',
          email_address: 'pops@vikingmail.com',
          image_url: 'https://placebear.com/100/300',
          address_id: 3
      }];
      return knex('contact').insert(contacts);
  });
};
