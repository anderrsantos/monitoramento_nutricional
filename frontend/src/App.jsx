/**
 * Componente: App
 * Descrição: Controla a navegação entre as telas do sistema sem uso de react-router.
 *            Utiliza um estado chamado `tela` para alternar entre os componentes de página.
 *            Também mantém o estado `usuario` para compartilhar os dados do usuário entre telas.
 *
 * Estados:
 *  - tela (string): define qual componente de página será exibido no momento.
 *  - usuario (object|null): armazena os dados do usuário durante o fluxo de uso.
 *
 * Páginas controladas:
 *  - Home: tela inicial com acesso para cadastro, login e recuperação.
 *  - Register: cadastro com campos iniciais.
 *  - RegisterConfirm: tela para inserir código de verificação.
 *  - RegisterDados: dados adicionais do perfil do usuário.
 *  - Conteudo: tela principal após login/cadastro concluído.
 *  - EditPerfil: tela de edição dos dados do usuário.
 *  - EmailRecuperacao: início do processo de recuperação de senha.
 *  - CodigoSenha: verificação do código de recuperação.
 *  - RecuperarSenha: redefinição da nova senha.
 *
 * Observação:
 * - O componente troca de tela com base no valor da variável `tela`, simulando uma navegação SPA.
 */

import React, { useState } from 'react'
import Home from './pages/Home/index.jsx'
import Register from './pages/Register/index.jsx'
import RegisterConfirm from './pages/Register/registerConfirm.jsx'
import RegisterDados from './pages/Register/registerDados.jsx'
import Conteudo from './pages/Conteudo/index.jsx'
import EditPerfil from './pages/EditPerfil/index.jsx'
import CodigoSenha from './pages/RecurarSenha/codigoSenha.jsx'
import EmailRecuperacao from './pages/RecurarSenha/emailRecuperacao.jsx'
import RecuperarSenha from './pages/RecurarSenha/recuperarSenha.jsx'

function App() {
  const [tela, setTela] = useState('home')
  const [usuario, setUsuario] = useState(null)

  return (
    <>
      {tela === 'home' && (
        <Home
          irParaCadastro={() => setTela('register')}
          irParaCadastroDados={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('registerDados')
          }}
          irParaConteudo={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('conteudo')
          }}
          irParaEmailRecupecao={() => setTela('emailRecuperacao')}
        />
      )}

      {tela === 'register' && (
        <Register
          irParaRegisterConfirm={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('registerConfirm')
          }}
          voltar={() => setTela('home')}
        />
      )}

      {tela === 'registerConfirm' && (
        <RegisterConfirm
          usuario={usuario}
          irParaCadastroDados={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('registerDados')
          }}
          voltar={() => setTela('register')}
          voltarHome={() => setTela('home')}
        />
      )}

      {tela === 'registerDados' && (
        <RegisterDados
          usuario={usuario}
          irParaConteudo={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('conteudo')
          }}
          voltar={() => setTela('register')}
          voltarHome={() => setTela('home')}
        />
      )}

      {tela === 'conteudo' && (
        <Conteudo
          usuario={usuario}
          voltar={() => setTela('home')}
          irParaPerfil={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('editPerfil')
          }}
        />
      )}

      {tela === 'editPerfil' && (
        <EditPerfil
          usuario={usuario}
          voltar={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('conteudo')
          }}
        />
      )}

      {tela === 'emailRecuperacao' && (
        <EmailRecuperacao
          irParaCodigoSenha={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('codigoSenha')
          }}
          voltarHome={() => setTela('home')}
        />
      )}

      {tela === 'codigoSenha' && (
        <CodigoSenha
          usuario={usuario}
          irParaRecuperarSenha={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('RecuperarSenha')
          }}
          voltarHome={() => setTela('home')}
        />
      )}

      {tela === 'RecuperarSenha' && (
        <RecuperarSenha
          usuario={usuario}
          voltarHome={() => setTela('home')}
        />
      )}
    </>
  )
}

export default App
