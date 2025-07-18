import '../../index.css';
import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import api from '../../services/api.js';

function CodigoSenha({ usuario, irParaRecuperarSenha, voltarHome }) {
  // Estado para exibir mensagens de aviso ou erro para o usuário
  const [aviso, setAviso] = useState('');

  // useRef para garantir que o envio do código por email só execute uma vez
  const hasRun = useRef(false);

  // Função para voltar para a página inicial
  const voltarHomeLocal = () => {
    voltarHome();
  };

  // Função que dispara o envio do código para o email do usuário via API
  function eventEmail(event) {
    if (event) event.preventDefault();

    api.post('/serviceEmail', { email: usuario.email }) 
      .then((response) => {
        console.log('Código enviado para o email:', response.data);
        setAviso('Código enviado com sucesso.');
      })
      .catch((error) => {
        console.error('Erro ao enviar o código:', error);
        setAviso('Erro ao enviar o código. Por favor, tente novamente.');
      });
  }

  // useEffect para enviar o código automaticamente quando o componente monta, 
  // mas apenas uma vez, controlado pelo hasRun.current
  useEffect(() => {
    if (usuario?.email && !hasRun.current) {
      eventEmail();
      hasRun.current = true;
    }
  }, [usuario]);

  // Função que trata o envio do formulário para validar o código informado
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Pega o código digitado no input
    const codigoRecebido = event.target.codigo.value.trim();

    // Validação simples para campo vazio
    if (!codigoRecebido) {
      setAviso('Por favor, insira o código.');
      return;
    }

    try {
      // Faz chamada para verificar o código recebido
      const response = await api.get('/getVerificarCodigo', {
        params: {
          email: usuario.email,
          codigoRecebido: codigoRecebido
        }
      });

      // Se sucesso, navega para a tela de recuperação de senha
      if (response.status === 200 && response.data.message === 'Código confirmado com sucesso.') {
        irParaRecuperarSenha(usuario);
      } else {
        setAviso('Código incorreto. Verifique o código enviado por e-mail.');
      }
    } catch (res) {
      console.error('Erro ao fazer registro:', res);

      // Mensagem de erro detalhada para erros de validação (400)
      if (res.response?.status === 400) {
        setAviso(res.response?.data?.message || 'Erro ao confirmar o registro. Por favor, tente novamente.');
      } else {
        setAviso('Erro ao confirmar o registro. Por favor, tente novamente mais tarde.');
      }
    }
  };

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-2 position-fixed w-100 shadow-sm z-3 top-0 start-0">
        <div className="container-fluid justify-content-between">
          {/* Logo com nome do app */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal - cartão centralizado */}
      <main className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow p-4 bg-white w-100" style={{ maxWidth: '500px' }}>
          {/* Botão fechar (voltar para home) */}
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3"
            aria-label="Fechar"
            onClick={voltarHomeLocal}
          ></button>

          {/* Título com email do usuário */}
          <h5 className="text-center fw-semibold mb-4 mt-2">
            Informe o <span className="text-success">código</span> enviado para o e-mail.<br />
            <strong>{usuario?.email || 'email@exemplo.com'}</strong>
          </h5>

          {/* Formulário para digitar o código */}
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

            {/* Botão confirmar */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Confirmar</button>
            </div>

            {/* Botão para reenviar o código */}
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

            {/* Exibição de mensagens de aviso ou erro */}
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
