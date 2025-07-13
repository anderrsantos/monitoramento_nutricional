import '../../index.css';
import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import api from '../../services/api.js';

function EmailRecuperacao({irParaCodigoSenha, voltarHome }) {
  const [aviso, setAviso] = useState('');

  const voltarHomeLocal = () => {
    voltarHome();
  };

  const verificarEmail = async (email) => {
    try {
      const response = await api.get('/searchUser', {
        params: { email }
      });

      if (response.status === 200 && response.data?.id) {
        // ('Este email já está cadastrado');
        return false;
      }
    } catch (error) {
      if (error.response?.status === 404) {
        return true; // Email não encontrado, pode seguir
      }
      console.error('Erro ao verificar o email:', error);
      alert('Erro ao verificar o email. Por favor, tente novamente mais tarde.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();

    if (!email) {
      setAviso('Por favor, insira um e-mail válido.');
      return;
    }

    const emailValido = await verificarEmail(email); 

    if (!emailValido) {
      irParaCodigoSenha({ email }); 
    }
  };

  return (
    <>
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

      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow p-4 bg-white w-100" style={{ maxWidth: '500px' }}>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarHomeLocal}
          ></button>

          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Informe o e-mail para a recuperação da senha.
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">Confirmar Email</button>
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
  );
}

export default EmailRecuperacao;
