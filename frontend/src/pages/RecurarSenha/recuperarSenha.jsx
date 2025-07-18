import '../../index.css' // Importa o CSS global da aplicação
import React, { useState } from 'react' // Importa React e hook useState para gerenciar estado local
import logo from '../../assets/logo.png' // Importa a logo para o componente
import api from '../../services/api.js' // Importa a instância do axios configurada para chamadas API
import { FaEye, FaEyeSlash } from 'react-icons/fa' // Importa ícones para mostrar/ocultar senha

function RecuperarSenha({ usuario, voltarHome }) {
  // Estado para armazenar mensagens de aviso/erro ao usuário
  const [aviso, setAviso] = useState('')

  // Estado para controlar se a senha está visível ou oculta
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  // Estado para controlar se a confirmação da senha está visível ou oculta
  const [confirmarSenhaVisivel, setConfirmarSenhaVisivel] = useState(false)

  // Função local para voltar para a tela inicial
  const voltarLocal = () => {
    voltarHome()
  }

  // Função que será chamada ao submeter o formulário
  const handleSubmit = async (event) => {
    event.preventDefault() // Previne o comportamento padrão do formulário (recarregar a página)

    // Captura e remove espaços antes/depois da senha e confirmação
    const password = event.target.senha.value.trim()
    const confirmPassword = event.target.confirmar.value.trim()

    setAviso('') // Limpa qualquer aviso anterior

    // Valida se a senha tem no mínimo 8 caracteres
    if (password.length < 8) {
      setAviso('A senha precisa ter pelo menos 8 caracteres.')
      return
    }

    // Regex para validar senha forte (mínimo uma letra maiúscula, uma minúscula e um número)
    const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    if (!senhaForteRegex.test(password)) {
      setAviso('A senha deve conter letras maiúsculas, minúsculas e números.')
      return
    }

    // Verifica se as senhas digitadas são iguais
    if (password !== confirmPassword) {
      setAviso('As senhas não coincidem. Por favor, tente novamente.')
      return
    }

    try {
      // Faz a requisição PUT para atualizar a senha do usuário, enviando email e nova senha
      const response = await api.put('/updateUser', { email: usuario.email, password })

      if (response.status === 200) {
        // Mostra mensagem de sucesso (pode vir da API ou mensagem padrão)
        setAviso(response.data.message || 'Senha atualizada com sucesso!')

        // Aguarda 2 segundos para o usuário ver o aviso antes de voltar para a home
        setTimeout(() => {
          voltarHome()
        }, 2000)
      }
    } catch (erro) {
      // Em caso de erro na atualização, exibe no console e mostra mensagem para o usuário
      console.error('Erro ao atualizar senha:', erro.response || erro.message || erro)
      setAviso('Erro ao atualizar senha. Tente novamente mais tarde.')
    }
  }

  return (
    <>
      {/* Navbar fixa no topo da página */}
      <nav
        id="nav_bar_cadastro"
        className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0"
        style={{ zIndex: 1000 }}
      >
        <div className="container-fluid justify-content-between">
          {/* Logo centralizada que chama voltarLocal ao clicar */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" onClick={voltarLocal} id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal com o formulário */}
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <form
          onSubmit={handleSubmit} // Função para submissão
          className="card shadow-sm p-4 rounded-4 position-relative center"
          style={{ maxWidth: '450px', width: '100%' }}
        >
          {/* Botão para fechar o formulário e voltar para a home */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarLocal}
          ></button>

          {/* Título do formulário */}
          <h3 className="bemvindo text-center mb-4">
            Informe as novas senhas
          </h3>

          {/* Campo senha com botão para mostrar/ocultar */}
          <div className="mb-3">
            <label htmlFor="senha" className="form-label">Senha</label>
            <div className="campo-senha">
              <input
                type={senhaVisivel ? 'text' : 'password'} // Troca o tipo para mostrar/ocultar senha
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
                aria-label={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {/* Ícone troca conforme o estado */}
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Campo confirmar senha com botão para mostrar/ocultar */}
          <div className="mb-4">
            <label htmlFor="confirmar" className="form-label">Confirmar senha</label>
            <div className="campo-senha">
              <input
                type={confirmarSenhaVisivel ? 'text' : 'password'} // Tipo do input para confirmação de senha
                id="confirmar"
                name="confirmar"
                className="input-senha"
                placeholder="Repita sua senha"
                required
              />
              <button
                type="button"
                className="btn-olho"
                onClick={() => setConfirmarSenhaVisivel(!confirmarSenhaVisivel)} // Alterna visibilidade confirmação
                aria-label={confirmarSenhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {confirmarSenhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Botão para enviar o formulário */}
          <button
            type="submit"
            className="btn btn-success w-100 fw-semibold"
          >
            Confirmar
          </button>

          {/* Exibe aviso ou erro se existir */}
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

export default RecuperarSenha
