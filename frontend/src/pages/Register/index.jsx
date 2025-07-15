import './style.css'
import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'
import InputSenha from '../../components/InputSenha/index.jsx'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


function Register({ irParaRegisterConfirm, voltar }) {
  const [aviso, setAviso] = useState('')
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false)

  const voltarLocal = () => {
    voltar()
  }

  const enviarCodigoEmail = (email) => {
    api.post('/serviceEmail', { email: email }) // Pode ajustar nome se houver
      .then((response) => {
        console.log('Código enviado para o email:', response.data)
        setAviso('Código enviado com sucesso.')
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error)
        setAviso('Erro ao enviar o código. Por favor, tente novamente.')
      })
  }

  const verificarEmail = async (email) => {
    try {
      const response = await api.get('/searchUser', {
        params: { email } // << Use `params` para GET com Axios
      });

      // A API retorna o usuário ou status 404
      if (response.status === 200 && response.data?.id) {
        setAviso('Este email já está cadastrado. Por favor, use outro email.');
        return false;
      }
    } catch (error) {
      if (error.response?.status === 404) {
        return true; // OK, e-mail não existe
      }
      console.error('Erro ao verificar o email:', error);
      alert('Erro ao verificar o email. Por favor, tente novamente mais tarde.');
      return false;
    }

    return true; // Caso padrão: pode seguir
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value.trim();
    const password = event.target.senha.value;
    const confirmPassword = event.target.confirmar.value;

    setAviso('');

    // Verificação básica dos campos
    if (!email || !password || !confirmPassword) {
      setAviso('Todos os campos são obrigatórios.');
      return;
    }

    // Verificação de senha forte: letras maiúsculas, minúsculas e números
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!senhaForteRegex.test(password)) {
      setAviso('A senha deve conter letras maiúsculas, minúsculas e números.');
      return;
    }
    console.log('passoword:', password)
    console.log('ConformPassoword:', confirmPassword)

    // Senhas coincidem
    if (password !== confirmPassword) {
      setAviso('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }


    // Validação de comprimento mínimo
    if (password.length < 8) {
      setAviso('A senha precisa ter pelo menos 8 caracteres.');
      return;
    }


    console.log('Email:', email, 'Password:', password);

    const podeContinuar = await verificarEmail(email);
    if (podeContinuar) {
      await enviarCodigoEmail(email);
      irParaRegisterConfirm({ email, password });
    } else {
      setAviso('Email já em uso. Por favor, tente novamente.');
    }
  };



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
            <div className="campo-senha">
              <input
                type={senhaVisivel ? 'text' : 'password'}
                id="senha"
                name="senha"
                className="input-senha"
                placeholder="Digite sua senha"
                required
              />
              <button
                type="button"
                className="btn-olho"
                onClick={() => setSenhaVisivel(!senhaVisivel)}
              >
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirmar senha */}
          <div className="mb-4">
            <label htmlFor="confirmar" className="form-label">Confirmar senha</label>
            <div className="campo-senha">
              <input
                type={confirmarSenhaVisivel ? 'text' : 'password'}
                id="confirmar"
                name="confirmar"
                className="input-senha"
                placeholder="Repita sua senha"
                required
              />
              <button
                type="button"
                className="btn-olho"
                onClick={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)}
              >
                {confirmarSenhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
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
          </div>

          {/* Aviso de erro */}
          {aviso && (
            <div className="text-center mt-3 text-danger small fw-semibold">
              {aviso}
            </div>
          )}
        </form>
      </main>
    </>
  )
}

export default Register
