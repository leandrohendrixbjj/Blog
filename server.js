
console.clear();
require('dotenv').config();
require('./redis/blackList.js');

const PORT = process.env.PORT;

const db = require('./database');
const app = require('./app');
const routes = require('./rotas');


routes(app);

app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}`)
);
