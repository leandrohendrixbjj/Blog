const posts = require('./src/posts');
const usuarios = require('./src/usuarios');
const bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.json());
  
  app.get('/', (req, res) => {
    res.send('Olá pessoa!')
  });
  
  posts.rotas(app);
  usuarios.rotas(app);
};