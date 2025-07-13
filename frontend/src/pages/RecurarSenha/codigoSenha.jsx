import '../../index.css';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import api from '../../services/api.js';

function CodigoSenha({ usuario, irParaRecuperarSenha, voltarHome }) {
  const [aviso, setAviso] = useState('');
  const hasRun = useRef(false);  // controla execução única do eventEmail

  const voltarHomeLocal = () => {
    voltarHome();
  };

  function eventEmail(event) {
    if (event) event.preventDefault();

    api.post('/serviceEmail', { email: usuario.email }) 
      .then((response) => {
        console.log('Código enviado para o email:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error);
        setAviso('Erro ao enviar o código. Por favor, tente novamente.');
      });
  }

  useEffect(() => {
    if (usuario?.email && !hasRun.current) {
      eventEmail();
      hasRun.current = true;  // marca que já rodou
    }
  }, [usuario]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const codigoRecebido = event.target.codigo.value.trim();

    if (!codigoRecebido) {
      setAviso('Por favor, insira o código.');
      return;
    }

    try {
      const response = await api.get('/getVerificarCodigo', {
        params: {
          email: usuario.email,
          codigoRecebido: codigoRecebido
        }
      });

      if (response.status === 200 && response.data.message === 'Código confirmado com sucesso.') {
        irParaRecuperarSenha(usuario);
      } else {
        setAviso('Código incorreto. Verifique o código enviado por e-mail.');
      }
    } catch (res) {
      console.error('Erro ao fazer registro:', res);
      if (res.response?.status === 400) {
        setAviso(res.response?.data?.message || 'Erro ao confirmar o registro. Por favor, tente novamente.');
      } else {
        setAviso('Erro ao confirmar o registro. Por favor, tente novamente mais tarde.');
      }
    }
  };

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
            Informe o <span className="text-success">código</span> enviado para o e-mail.<br />
            <strong>{usuario?.email || 'email@exemplo.com'}</strong>
          </h5>

          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="codigo" className="form-label">Código</label> 
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
                onClick={(e) => {
                  eventEmail(e);
                  setAviso('Código reenviado com sucesso.');
                }}
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
  );
}

export default CodigoSenha;
