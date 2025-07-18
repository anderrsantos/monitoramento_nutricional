import '../../index.css' // Importa o CSS global da aplicação
import React, { useState } from 'react' // Importa React e hook useState para controle de estado local
import logo from '../../assets/logo.png' // Importa logo para o cabeçalho
import api from '../../services/api.js' // Importa instância Axios para chamadas HTTP
import { FaEye, FaEyeSlash } from 'react-icons/fa' // Ícones para mostrar/ocultar senha

function Register({ irParaRegisterConfirm, voltar }) {
  // Estado para armazenar mensagens de aviso ou erro para o usuário
  const [aviso, setAviso] = useState('')
  // Estado para controlar se a senha está visível ou não
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  // Estado para controlar se o campo de confirmação da senha está visível ou não
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false)

  // Função para chamar a ação de voltar para a tela anterior
  const voltarLocal = () => {
    voltar()
  }

  // Função para enviar o código de confirmação por e-mail
  const enviarCodigoEmail = (email) => {
    api.post('/serviceEmail', { email: email }) // Envia requisição POST para o endpoint de envio de código
      .then((response) => {
        console.log('Código enviado para o email:', response.data)
        setAviso('Código enviado com sucesso.')
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error)
        setAviso('Erro ao enviar o código. Por favor, tente novamente.')
      })
  }

  // Função para verificar se o e-mail já está cadastrado
  const verificarEmail = async (email) => {
    try {
      const response = await api.get('/searchUser', {
        params: { email } // Parâmetros de query para requisição GET
      })

      // Se retornar status 200 e encontrar usuário com id, significa que email já existe
      if (response.status === 200 && response.data?.id) {
        setAviso('Este email já está cadastrado. Por favor, use outro email.')
        return false // Não pode continuar com esse email
      }
    } catch (error) {
      if (error.response?.status === 404) {
        return true // Email não encontrado, pode continuar
      }
      // Caso ocorra outro erro, loga no console e alerta usuário
      console.error('Erro ao verificar o email:', error)
      alert('Erro ao verificar o email. Por favor, tente novamente mais tarde.')
      return false
    }

    return true // Caso padrão, pode continuar
  }

  // Função chamada ao enviar o formulário de cadastro
  const handleSubmit = async (event) => {
    event.preventDefault() // Evita recarregar a página

    // Pega os valores digitados pelo usuário
    const email = event.target.email.value.trim()
    const password = event.target.senha.value
    const confirmPassword = event.target.confirmar.value

    setAviso('') // Limpa mensagens anteriores

    // Valida campos obrigatórios
    if (!email || !password || !confirmPassword) {
      setAviso('Todos os campos são obrigatórios.')
      return
    }

    // Validação de senha forte (letras maiúsculas, minúsculas e números)
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!senhaForteRegex.test(password)) {
      setAviso('A senha deve conter letras maiúsculas, minúsculas e números.')
      return
    }

    console.log('passoword:', password)
    console.log('ConformPassoword:', confirmPassword)

    // Confirma que as senhas são iguais
    if (password !== confirmPassword) {
      setAviso('As senhas não coincidem. Por favor, tente novamente.')
      return
    }

    // Validação de comprimento mínimo da senha
    if (password.length < 8) {
      setAviso('A senha precisa ter pelo menos 8 caracteres.')
      return
    }

    console.log('Email:', email, 'Password:', password)

    // Verifica se o email já está cadastrado
    const podeContinuar = await verificarEmail(email)
    if (podeContinuar) {
      // Se pode continuar, envia o código para o email
      await enviarCodigoEmail(email)
      // Vai para a próxima tela, passando email e senha
      irParaRegisterConfirm({ email, password })
    } else {
      setAviso('Email já em uso. Por favor, tente novamente.')
    }
  }

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav
        id="nav_bar_cadastro"
        className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0"
        style={{ zIndex: 1000 }}
      >
        <div className="container-fluid justify-content-between">
          {/* Logo que chama a função voltarLocal ao ser clicada */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" onClick={voltarLocal} id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal com formulário de cadastro */}
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <form
          onSubmit={handleSubmit} // Função chamada ao submeter o formulário
          className="card shadow-sm p-4 rounded-4 position-relative center"
          style={{ maxWidth: '450px', width: '100%' }}
        >
          {/* Botão fechar para voltar */}
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

          {/* Campo Email */}
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

          {/* Campo Senha com botão para mostrar/ocultar */}
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
                onClick={() => setSenhaVisivel(!senhaVisivel)} // Alterna visibilidade da senha
              >
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Campo Confirmar senha com botão para mostrar/ocultar */}
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
                onClick={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)} // Alterna visibilidade
              >
                {confirmarSenhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Botão para enviar formulário */}
          <button
            type="submit"
            className="btn btn-success w-100 fw-semibold"
          >
            Criar conta
          </button>

          {/* Link para voltar ao login */}
          <div className="text-center mt-3">
            Já possui uma conta? <br />
            <a
              href="#"
              className="text-decoration-none small"
              onClick={(e) => {
                e.preventDefault()
                voltarLocal()
              }}
            >
              Conecte-se
            </a>
          </div>

          {/* Mensagem de aviso/erro */}
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
