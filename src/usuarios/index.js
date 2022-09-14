module.exports = {
  rotas: require('./usuarios-rotas'),
  controlador: require('./usuarios-controlador'),
  modelo: require('./usuarios-modelo'),
  estrategiasAutenticacao: require('../middlewares/estrategias-autenticacao.js'),
  middlewaresAutenticacao: require('../middlewares/autenticacao.js')
}