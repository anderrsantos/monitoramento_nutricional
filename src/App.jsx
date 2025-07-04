import React, { useState } from 'react'
import Home from './pages/Home/index.jsx'
import Register from './pages/Register/index.jsx'
import RegisterConfirm from './pages/Register/registerConfirm.jsx'
import RegisterDados from './pages/Register/registerDados.jsx'
import Conteudo from './pages/Conteudo/index.jsx'

function App() {
  const [tela, setTela] = useState('home')

  return (
    <>
      {tela === 'home' && (<Home irParaCadastro={() => setTela('register')} 
                                 irParaConteudo={()=> setTela('conteudo')}/>)}
      {tela === 'register' && (<Register irParaRegisterConfirm={() => setTela('registerConfirm')}
                                         voltar={() => setTela('home')}/>)}
      {tela === 'registerConfirm' && (<RegisterConfirm irParaCadastroDados={() => setTela('registerDados')}
                                                        voltar={() => setTela('register')}
                                                        voltarHome={() => setTela('home')}/>)}
      {tela === 'registerDados' && (<RegisterDados irParaRegisterConfirm={() => setTela('home')}
                                                    voltar={() => setTela('register')}
                                                    voltarHome={() => setTela('home')}/>)}
      {tela === 'conteudo' && <Conteudo voltar={() => setTela('home')}/>}


    </>
  )
}

export default App

