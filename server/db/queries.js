const knex = require('./knex');
module.exports = {
  AllContactInfo : () => {
    return knex.select().from('contact')
  }
  // ,
  // getName: (id) => {
  //   return knex('contact').where('id',id);
  // }
}
// innerJoin('address', 'contact.id', 'address.contact_id');
