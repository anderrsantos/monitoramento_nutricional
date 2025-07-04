import './style.css'
import '../../index.css'
import React from 'react'
import logo from '../../assets/logo.png'

function RegisterDados({ irParaConteudo, voltar, voltarHome}) {
  const irParaConteudoLocal = () => {
    irParaConteudo()
  }

  const voltarLocal = () => {
    voltar()
  }

  const voltarHomeLocal = () => {
    voltarHome()
  }

  return (
    <>
      {/* Navbar fixa */}
      <nav
        id="nav_bar_cadastro"
        className="navbar navbar-expand-lg bg-white px-4 py-2 position-fixed w-100 shadow-sm start-0 top-0"
        style={{ zIndex: 1000 }}
      >
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
      <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
        <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
          {/* Botão Fechar */}
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltarLocal} />

          <h4 className="text-center fw-semibold mb-4 mt-2">
            Complete seus <span className="text-success">dados</span> pessoais
          </h4>

          <form id="form_dados">
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" id="nome" name="nome" className="form-control" placeholder="Digite seu nome" required />
            </div>

            <div className="mb-3">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input type="text" id="sobrenome" name="sobrenome" className="form-control" placeholder="Digite seu sobrenome" required />
            </div>

            <div className="mb-3">
              <label htmlFor="data_nascimento" className="form-label">Data de Nascimento</label>
              <input type="date" id="data_nascimento" name="data_nascimento" className="form-control" required />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="peso" className="form-label">Peso (kg)</label>
                <input type="number" step="0.1" id="peso" name="peso" className="form-control" placeholder="Ex: 70,0" required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="altura" className="form-label">Altura (cm)</label>
                <input type="number" step="0.1" id="altura" name="altura" className="form-control" placeholder="Ex: 175" required />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="sexo" className="form-label">Sexo</label>
              <select id="sexo" name="sexo" className="form-select" required>
                <option disabled value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="meta" className="form-label">Qual é a sua meta?</label>
              <select id="meta" name="meta" className="form-select" required>
                <option disabled value="">Selecione</option>
                <option value="perder_gordura">Perder gordura</option>
                <option value="manter_peso">Manter o peso</option>
                <option value="ganhar_massa">Ganhar massa muscular</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="nivel_atividade" className="form-label">Qual é o seu nível de atividade física?</label>
              <select id="nivel_atividade" name="nivel_atividade" className="form-select" required>
                <option disabled value="">Selecione</option>
                <option value="sedentario">Sedentário - Nenhum exercício regular</option>
                <option value="levemente_ativo">Levemente ativo - Exercícios leves, 1 a 3 vezes por semana</option>
                <option value="moderadamente_ativo">Moderadamente ativo - Exercícios moderados, 3 a 5 vezes por semana</option>
                <option value="muito_ativo">Bastante ativo - Exercícios intensos, 6 ou mais vezes por semana</option>
              </select>
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-success"
                onClick={(e) => {
                  e.preventDefault()
                  irParaConteudoLocal()
                }}
              >
                Salvar dados
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default RegisterDados
