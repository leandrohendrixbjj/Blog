const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutenticacao = require('../middlewares/autenticacao.js');
const middlewaresBearer = require('../middlewares/autenticacaoBearer.js');

module.exports = app => {
  app
    .route('/usuario/login')
    .post(middlewaresAutenticacao.local, usuariosControlador.login)
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id')
    .delete(middlewaresBearer.bearer, usuariosControlador.deleta);
};
