import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function RecuperarSenha({usuario, voltarHome}) {
    const [aviso, setAviso] = useState('')
    

    const voltarLocal = () => {
        voltarHome()
    }

   const handleSubmit = async (event) => {
        event.preventDefault();
        const password = event.target.senha.value;
        const confirmPassword = event.target.confirmar.value;

        setAviso('');

        if (!password || !confirmPassword) {
            setAviso('Todos os campos são obrigatórios.');
            return;
        }

        const senhaForteRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!senhaForteRegex.test(password)) {
            setAviso('A senha deve conter letras maiúsculas, minúsculas e números.');
            return;
        }

        if (password !== confirmPassword) {
            setAviso('As senhas não coincidem. Por favor, tente novamente.');
            return;
        }

        if (password.length < 8) {
            setAviso('A senha precisa ter pelo menos 8 caracteres.');
            return;
        }
        console.log(password)

        try {
            const response = await api.put('/updateUser', { email: usuario.email, password });

            if (response.status === 200) {
              setAviso(response.data.message);
              await delay(2000); 
              voltarHome();
            }
        } catch (erro) {
            console.error('Erro ao atualizar senha:', erro.response || erro.message || erro);
            setAviso('Erro ao atualizar senha. Tente novamente mais tarde.');
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
          <h3 className="bemvindo text-center mb-4">
            Informe as novas senhas
          </h3>

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
            Confirmar
          </button>


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

export default RecuperarSenha;