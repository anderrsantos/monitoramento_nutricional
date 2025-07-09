import './style.css'
import '../../index.css'
import React from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function RegisterConfirm({ usuario, irParaCadastroDados, voltar, voltarHome }) {
  const voltarLocal = () => {
    voltar()
  }

  const voltarHomeLocal = () => {
    voltarHome()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const codigo = event.target.codigo.value

    try {
      const response = await api.post('/register', {
        email: usuario.email,
        password: usuario.password,
      })
      // Sucesso: envia os dados atualizados para a próxima etapa
      irParaCadastroDados(response.data)
    } catch (res) {
      console.error('Erro ao fazer registro:', res)
      alert('Erro ao fazer registro. Verifique o código e tente novamente.')
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
            onClick={voltarLocal}
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
          </form>
        </div>
      </main>
    </>
  )
}

export default RegisterConfirm
