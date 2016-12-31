const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

router.get('/', (req,res) => {
  queries.AllContactInfo()
  .then(contacts => {
    res.render('all', {contact: contacts});
  })
})

// router.get('/:id', (req,res,next) => {
//   res.json(queries.getName(1));
  // res.send('router up!')
// })
module.exports = router;
