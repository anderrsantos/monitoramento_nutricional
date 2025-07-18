import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import frutasImg from '../../assets/frutas.jpg'
import api from '../../services/api.js'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Home({ irParaCadastro, irParaConteudo, irParaCadastroDados, irParaEmailRecupecao }) {
  // Estado para controlar se o menu hamburguer está aberto (mobile)
  const [menuAberto, setMenuAberto] = useState(false)

  // Estado para armazenar o email digitado no formulário
  const [email, setEmail] = useState('')

  // Estado para armazenar a senha digitada no formulário
  const [password, setPassword] = useState('')

  // Estado para controlar a visibilidade da senha (mostrar/ocultar)
  const [senhaVisivel, setSenhaVisivel] = useState(false)

  // Estado para guardar mensagem de erro na tentativa de login
  const [errorMessage, setErrorMessage] = useState('')

  // Alterna entre abrir e fechar o menu hamburguer
  const toggleMenu = () => setMenuAberto(prev => !prev)

  // Fecha o menu hamburguer (usado quando o usuário clica em alguma opção)
  const fecharMenu = () => setMenuAberto(false)

  // Navega para a tela de cadastro e fecha o menu
  const criarConta = () => {
    irParaCadastro()
    fecharMenu()
  }

  // Navega para a tela de recuperação de senha
  const irParaEmailRecupecaoLocal = () => {
    irParaEmailRecupecao()
  }

  // Função chamada quando o formulário é enviado (login)
  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('') // limpa mensagem de erro ao tentar login

    try {
      // Faz requisição POST para endpoint /login com email e senha
      const response = await api.post('/login', { email, password })

      // Se login for bem-sucedido, navega para tela de conteúdo com dados recebidos
      if (response.status === 200) {
        irParaConteudo(response.data);
      }
    } catch (error) {
      // Caso erro, pega a mensagem do backend ou usa uma padrão
      const message = error.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.'
      setErrorMessage(message)
    }
  }

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav
        id="nav_bar"
        className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 position-fixed w-100 shadow-sm z-3 top-0 start-0"
      >
        <div className="container-fluid justify-content-between start-0">
          {/* Botão hamburguer para abrir/fechar menu no mobile */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo central */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" id="logo">
            <img className="logo_main" src={logo} alt="Logo" />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger d-none d-lg-inline">TRACKER</span>
            </span>
          </a>

          {/* Menu colapsável */}
          <div className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`} id="navbarContent">
            {/* Menu para mobile */}
            <div className="d-lg-none w-100 d-flex flex-column align-items-center mt-3">
              <a className="btn outlined mb-2 w-75" onClick={criarConta}>Criar conta</a>
              <a href="#formulario_login" className="btn primary btn-red w-75" onClick={fecharMenu}>
                Entrar
              </a>
            </div>

            {/* Menu para desktop */}
            <div className="d-none d-lg-flex ms-auto">
              <a className="btn outlined me-2" onClick={criarConta}>Criar conta</a>
              <a href="#formulario_login" className="btn primary btn-red">Entrar</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Conteúdo principal: texto e formulário lado a lado */}
      <main
        className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center position-relative py-5 main-background"
        style={{ backgroundImage: `url(${frutasImg})` }}
      >
        {/* Overlay escurecendo a imagem */}
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay" style={{ zIndex: 0 }}></div>

        {/* Texto introdutório */}
        <section className="col-md-7 z-1 px-4 text-md-start mt-5 text-center" style={{ maxWidth: '780px', zIndex: 1 }}>
          <h1 className="d-5 fw-bold text-white mb-5 fs-1">
            Encontre o <br /> equilíbrio ideal <br />
            entre alimentação <br /> e cotidiano
          </h1>
        </section>

        {/* Formulário de login */}
        <section id="formulario_login" className="col-md-5 d-flex justify-content-center align-items-center" style={{ zIndex: 1 }}>
          <form
            className="card p-5 shadow rounded-4"
            style={{ maxWidth: '400px' }}
            onSubmit={handleSubmit}
          >
            {/* Título do formulário */}
            <h2 className="bemvindo mb-3 text-center">
              Bem-vindo(a) ao <br />
              <span className="nutri text-success">NUTRI</span>
              <span className="tracker text-danger">TRACKER</span>
            </h2>

            {/* Campo email */}
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input
                type="email"
                id="inputEmail"
                name="email"
                className="form-control"
                placeholder="Digite seu e-mail"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            {/* Campo senha com botão para mostrar/ocultar */}
            <div className="mb-3">
              <label htmlFor="inputSenha" className="form-label">Senha</label>
              <div className="campo-senha">
                <input
                  type={senhaVisivel ? 'text' : 'password'}
                  id="inputSenha"
                  name="senha"
                  className="input-senha"
                  placeholder="Digite sua senha"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                {/* Botão olho para alternar visibilidade da senha */}
                <button
                  type="button"
                  className="btn-olho"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  title={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Mensagem de erro se login falhar */}
              {errorMessage && (
                <p className="text-danger small mt-2">{errorMessage}</p>
              )}
            </div>

            {/* Link para recuperação de senha */}
            <div className="text-end mb-3">
              <a href="#" className="text-decoration-none small text-muted" onClick={irParaEmailRecupecaoLocal}>Esqueceu a sua senha?</a>
            </div>

            {/* Botão de login */}
            <button type="submit" className="btn btn-success w-100 py-2 fw-semibold">
              Entrar
            </button>

            {/* Link para cadastro */}
            <div className="text-center mt-3">
              Não tem uma conta? <br />
              <a className="bnt text-decoration-none small" onClick={criarConta} style={{cursor: 'pointer'}}>Cadastre-se.</a>
            </div>
          </form>
        </section>
      </main>

      {/* Rodapé */}
      <footer id="footer_body" className="bg-white border-top text-center py-3">
        <div className="justify-content-center">
          <p className="mb-1">© 2025 <strong>NutriTracker</strong>. Todos os direitos reservados.</p>
          <div className="d-flex justify-content-center gap-3 small">
            <a href="#" className="text-decoration-none">Política de Privacidade</a>
            <a href="#" className="text-decoration-none">Termos de Uso</a>
            <a href="#" className="text-decoration-none">Ajuda</a>
            <a href="#" className="text-decoration-none">Manual</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home
