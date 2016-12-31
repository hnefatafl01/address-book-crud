const express = require('express');
const bodyParser = require('body-parser');
const contact = require('./routes/contact');
const path = require('path');
const hbs = require('hbs');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



hbs.registerHelper('select', function(selected, options) {
  return options.fn(this).replace(
        new RegExp(' value=\"' + selected + '\"'),
        '$& selected="selected"');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//mount routes
app.use('/contact', contact);

//setup localhost
app.listen(3000, () => {
  console.log('listening on port 3000')
});
