import './style.css'
import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function RegisterConfirm({ usuario, irParaCadastroDados, voltar, voltarHome }) {
  const [aviso, setAviso] = useState('')

  const voltarLocal = () => {
    voltar()
  }

  const voltarHomeLocal = () => {
    voltarHome()
  }

  const eventEmail = (event) => {
    event.preventDefault()

    api.post('/serviceEmail', { email: usuario.email}) // Certifique-se de ter `nome`
      .then((response) => {
        console.log('Código enviado para o email:', response.data)
        setAviso('Código reenviado com sucesso.')
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error)
        setAviso('Erro ao enviar o código. Por favor, tente novamente.')
      })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const codigoRecebido = event.target.codigo.value

    try {
      const response = await api.post('/register', {
        email: usuario.email,
        password: usuario.password,
        codigo: codigoRecebido
      })

      if (response.status === 200) {
            irParaCadastroDados(response.data)
      }
    } catch (res) {
      console.error('Erro ao fazer registro:', res)
      if(res.response?.status === 400) {
          setAviso(res.response?.data?.message || 'Erro ao confirmar o registro. Por favor, tente novamente.')
      }
      else {
          setAviso('Erro ao confirmar o registro. Por favor, tente novamente mais tarde.')
      }
    }
  }

  return (
    <>
      {/* Navbar fixa */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0">
        <div className="container-fluid justify-content-between">
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
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarHomeLocal}
          ></button>

          <h5 className="text-center fw-semibold mb-4 mt-2">
            Informe o <span className="text-success">código</span> enviado para o e-mail<br />
            <strong>{usuario?.email || 'email@exemplo.com'}</strong>
          </h5>

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

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Confirmar</button>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-link text-decoration-none"
                onClick={eventEmail}
              >
                Reenviar código
              </button>
            </div>

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

