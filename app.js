const app = require('express')();
const bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  bodyParser.json()
);

module.exports = app;
