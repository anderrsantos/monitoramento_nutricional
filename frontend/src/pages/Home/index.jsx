import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import frutasImg from '../../assets/frutas.jpg'
import api from '../../services/api.js'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Home({ irParaCadastro, irParaConteudo, irParaCadastroDados, irParaEmailRecupecao }) {
  const [menuAberto, setMenuAberto] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [senhaVisivel, setSenhaVisivel] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')

  const toggleMenu = () => setMenuAberto(prev => !prev)
  const fecharMenu = () => setMenuAberto(false)
  const criarConta = () => {
    irParaCadastro()
    fecharMenu()
  }
  const irParaEmailRecupecaoLocal = () => {
    irParaEmailRecupecao()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    try {
      const response = await api.post('/login', { email, password })

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data.email)
        //checkPerfil(response.data) // Envia o ID do usuário para verificação do perfil
        irParaConteudo(response.data);
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Erro ao fazer login. Verifique suas credenciais.'
      setErrorMessage(message)
    }
  }

  return (
    <>
      <nav
        id="nav_bar"
        className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 position-fixed w-100 shadow-sm z-3 top-0 start-0"
      >
        <div className="container-fluid justify-content-between start-0">
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" id="logo">
            <img className="logo_main" src={logo} alt="Logo" />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger d-none d-lg-inline">TRACKER</span>
            </span>
          </a>

          <div className={`collapse navbar-collapse ${menuAberto ? 'show' : ''}`} id="navbarContent">
            <div className="d-lg-none w-100 d-flex flex-column align-items-center mt-3">
              <a className="btn outlined mb-2 w-75" onClick={criarConta}>Criar conta</a>
              <a href="#formulario_login" className="btn primary btn-red w-75" onClick={fecharMenu}>
                Entrar
              </a>
            </div>

            <div className="d-none d-lg-flex ms-auto">
              <a className="btn outlined me-2" onClick={criarConta}>Criar conta</a>
              <a href="#formulario_login" className="btn primary btn-red">Entrar</a>
            </div>
          </div>
        </div>
      </nav>

      <main
        className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center position-relative py-5 main-background"
        style={{ backgroundImage: `url(${frutasImg})` }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay" style={{ zIndex: 0 }}></div>

        <section className="col-md-7 z-1 px-4 text-md-start mt-5 text-center" style={{ maxWidth: '780px', zIndex: 1 }}>
          <h1 className="d-5 fw-bold text-white mb-5 fs-1">
            Encontre o <br /> equilíbrio ideal <br />
            entre alimentação <br /> e cotidiano
          </h1>
        </section>

        <section id="formulario_login" className="col-md-5 d-flex justify-content-center align-items-center" style={{ zIndex: 1 }}>
          <form
            className="card p-5 shadow rounded-4"
            style={{ maxWidth: '400px' }}
            onSubmit={handleSubmit}
          >
            <h2 className="bemvindo mb-3 text-center">
              Bem-vindo(a) ao <br />
              <span className="nutri text-success">NUTRI</span>
              <span className="tracker text-danger">TRACKER</span>
            </h2>

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
                <button
                  type="button"
                  className="btn-olho"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                  title={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {errorMessage && (
                <p className="text-danger small mt-2">{errorMessage}</p>
              )}
            </div>


            <div className="text-end mb-3">
              <a href="#" className="text-decoration-none small text-muted" onClick={irParaEmailRecupecaoLocal}>Esqueceu a sua senha?</a>
            </div>

            <button type="submit" className="btn btn-success w-100 py-2 fw-semibold">
              Entrar
            </button>

            <div className="text-center mt-3">
              Não tem uma conta? <br />
              <a className="bnt text-decoration-none small" onClick={criarConta}>Cadastre-se.</a>
            </div>
          </form>
        </section>
      </main>

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
