const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const Usuario = require('./usuarios-modelo');
const {InvalidArgumentError} = require('../erros.js');
const bcrypt = require('bcrypt');

passport.use(

    new localStrategy({
        userNameField: 'email',
        passwordField: 'senha',
        session:false
    }, async (email,senha,done) => {
        try {
          const usuario = await Usuario.buscaPorEmail(email);    
          verificaUsuario(usuario);
          verificaSenha(senha,usuario.senhaHash);

          done(null,usuario);
        } catch (error) {
          done(error);    
        }
        
    })
);

function verificaUsuario(usuario){
  if (!usuario)
    throw new InvalidArgumentError('Não existe usuário com esse e-mail');
}

async function verificaSenha(senha, senhaHash){
  const senhaValida = await bcrypt.compare(senha,senhaHash);

  if (!senhaValida)
    throw new InvalidArgumentError('Email ou senha invalidos');

}