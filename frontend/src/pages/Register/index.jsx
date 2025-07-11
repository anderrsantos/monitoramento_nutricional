import './style.css'
import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'

function Register({ irParaRegisterConfirm, voltar }) {
  const [aviso, setAviso] = useState('')

  const voltarLocal = () => {
    voltar()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.senha.value
    const confirmPassword = event.target.confirmar.value

    if (password !== confirmPassword) {
      setAviso('As senhas não coincidem. Por favor, tente novamente.')
      return
    } else {
      setAviso('')
      console.log('Email:', email, 'Password:', password)
      irParaRegisterConfirm({ email, password })
    }
  }

  return (
    <>
      {/* Navbar fixa */}
      <nav
        id="nav_bar_cadastro"
        className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0"
        style={{ zIndex: 1000 }}
      >
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" onClick={voltarLocal} id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <form
          onSubmit={handleSubmit} 
          className="card shadow-sm p-4 rounded-4 position-relative center"
          style={{ maxWidth: '450px', width: '100%' }}
        >
          {/* Botão Fechar */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarLocal}
          ></button>

          {/* Título */}
          <h2 className="bemvindo text-center mb-4">
            Criar conta no <span className="nutri text-success">NUTRI</span>
            <span className="tracker text-danger">TRACKER</span>
          </h2>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email" 
              className="form-control"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          {/* Senha */}
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha" 
              className="form-control"
              placeholder="Digite sua senha"
              required
            />
          </div>

          {/* Confirmar senha */}
          <div className="mb-4">
            <label htmlFor="confirmar" className="form-label">Confirmar senha</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              className="form-control"
              placeholder="Repita sua senha"
              required
            />
          </div>


          {/* Botão */}
          <button
            type="submit"
            className="btn btn-success w-100 fw-semibold"
          >
            Criar conta
          </button>

          {/* Link de login */}
          <div className="text-center mt-3">
            Já possui uma conta? <br />
            <a href="#" className="text-decoration-none small" onClick={(e) => { e.preventDefault(); voltarLocal(); }}>
              Conecte-se
            </a>

          {/* Aviso de erro */}
          {aviso && (
            <div className="text-danger small">
              {aviso}
            </div>
          )}

          </div>
        </form>
      </main>
    </>
  )
}

export default Register
