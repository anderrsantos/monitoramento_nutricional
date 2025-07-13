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
  const [usuario, setUsuario] = useState(null) // novo estado para guardar dados do usuário

  return (
    <>
      {tela === 'home' && (
        <Home
          irParaCadastro={() => setTela('register')}
          irParaConteudo={(dadosUsuario) => {
            setUsuario(dadosUsuario)        // guarda os dados do usuário
            setTela('conteudo')             // navega para Conteudo
          }}
          irParaCadastroDados={(dadosUsuario) =>{
            setUsuario(dadosUsuario) 
            setTela('registerDados')}}
          irParaEmailRecupecao={()=>{
            setTela('emailRecuperacao')
          }}
        />
      )}
      {tela === 'register' && (
        <Register
          irParaRegisterConfirm={(dadosUsuario) => {
            setUsuario(dadosUsuario) // guarda os dados do usuário        
            setTela('registerConfirm')
          }} 
          voltar={() => setTela('home')}
        />
      )}
      {tela === 'registerConfirm' && (
        <RegisterConfirm
          usuario={usuario}  
          irParaCadastroDados={(dadosUsuario) =>{
            setUsuario(dadosUsuario) // guarda os dados do usuário
            setTela('registerDados')}}
          voltar={() => setTela('register')}
          voltarHome={() => setTela('home')}
        />
      )}
      {tela === 'registerDados' && (
        <RegisterDados
          usuario={usuario}  
          irParaConteudo={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('conteudo')}}
          voltar={() => setTela('register')}
          voltarHome={() => setTela('home')}
        />
      )}
      {tela === 'conteudo' && (
        <Conteudo
          usuario={usuario}                     // passa os dados do para Conteudo
          voltar={() => setTela('home')}
          irParaPerfil={(dadosUsuario) =>{
            setUsuario(dadosUsuario)
            setTela('editPerfil')}
          }
        />
      )}
      {tela === 'editPerfil' && (
        <EditPerfil
          usuario={usuario}  
          voltar={(dadosUsuario) =>{
            setUsuario(dadosUsuario)
            setTela('conteudo')
          } } 
          
        />
      )}

      {/*  */} 
      {tela === 'emailRecuperacao' && (
        <EmailRecuperacao
          irParaCodigoSenha={(dadosUsuario) => {
            setUsuario(dadosUsuario)
            setTela('codigoSenha')
          } }
          voltarHome={()=>{
            setTela('home')
          }} 
          
        />
      )}
      {tela === 'codigoSenha' && (
        <CodigoSenha
          usuario={usuario}
          irParaRecuperarSenha={(dadosUsuario)=>{
            setUsuario(dadosUsuario)
            setTela('RecuperarSenha')
          }}
          voltarHome={()=>{
            setTela('home')
          }} 
          
        />
      )}
      {tela === 'RecuperarSenha' && (
        <RecuperarSenha
          usuario={usuario}  
          voltarHome={()=>{
            setTela('home')
          }} 
        />
      )}
          
      
        
    </>
  )
}

export default App
