
console.clear();
require('dotenv').config();

const app = require('./app');
const db = require('./database');
const PORT = process.env.PORT;
const routes = require('./rotas');

routes(app);

app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}`)
);
