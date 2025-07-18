import '../../index.css' // Importa estilos globais
import React, { useState } from 'react' // Importa React e useState para controle de estado local
import logo from '../../assets/logo.png' // Importa o logo da aplicação
import api from '../../services/api.js' // Instância do Axios para chamadas HTTP

function RegisterConfirm({ usuario, irParaCadastroDados, voltar, voltarHome }) {
  // Estado para armazenar mensagens de aviso ou erro para o usuário
  const [aviso, setAviso] = useState('')

  // Função para voltar para a tela anterior
  const voltarLocal = () => {
    voltar()
  }

  // Função para voltar para a tela inicial/home
  const voltarHomeLocal = () => {
    voltarHome()
  }

  // Função para reenviar o código por e-mail
  const eventEmail = (event) => {
    // Previna o comportamento padrão do botão, se passado como evento
    if (event) event.preventDefault()

    // Chamada POST para enviar código ao e-mail do usuário
    api.post('/serviceEmail', { email: usuario.email })
      .then((response) => {
        console.log('Código enviado para o email:', response.data)
        setAviso('Código reenviado com sucesso.')
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error)
        setAviso('Erro ao enviar o código. Por favor, tente novamente.')
      })
  }

  // Função que trata o envio do formulário para confirmar o código
  const handleSubmit = async (event) => {
    event.preventDefault() // Evita o reload da página no envio do form
    const codigoRecebido = event.target.codigo.value // Pega o código digitado

    try {
      // Chamada GET para verificar o código junto à API
      const response = await api.get('/getVerificarCodigo', {
        params: {
          email: usuario.email,
          codigoRecebido: codigoRecebido
        }
      })

      // Se o código for confirmado com sucesso, vai para o próximo passo no cadastro
      if (response.status === 200 && response.data.message === 'Código confirmado com sucesso.') {
        irParaCadastroDados(usuario)
      } else {
        setAviso('Código incorreto. Verifique o código enviado por e-mail.')
      }
    } catch (res) {
      console.error('Erro ao fazer registro:', res)

      if (res.response?.status === 400) {
        // Caso erro 400, mostra mensagem detalhada da API
        setAviso(res.response?.data?.message || 'Erro ao confirmar o registro. Por favor, tente novamente.')
      } else {
        // Para outros erros, mensagem genérica
        setAviso('Erro ao confirmar o registro. Por favor, tente novamente mais tarde.')
      }
    }
  }

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0">
        <div className="container-fluid justify-content-between">
          {/* Logo */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow p-4 bg-white w-100" style={{ maxWidth: '500px' }}>
          {/* Botão para fechar e voltar à home */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarHomeLocal}
          ></button>

          {/* Título com o e-mail do usuário */}
          <h5 className="text-center fw-semibold mb-4 mt-2">
            Informe o <span className="text-success">código</span> enviado para o e-mail<br />
            <strong>{usuario?.email || 'email@exemplo.com'}</strong>
          </h5>

          {/* Formulário para inserção do código */}
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="codigo"
                name="codigo"
                className="form-control"
                placeholder="Digite o código"
                required
              />
            </div>

            {/* Botão para confirmar código */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Confirmar</button>
            </div>

            {/* Botão para reenviar código */}
            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={eventEmail}
              >
                Reenviar código
              </button>
            </div>

            {/* Mensagem de aviso ou erro */}
            {aviso && (
              <div className="text-center mt-2 text-danger fw-semibold">
                {aviso}
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  )
}

export default RegisterConfirm
