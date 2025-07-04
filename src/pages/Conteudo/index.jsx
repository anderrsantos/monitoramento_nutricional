import '../../index.css'
import React from 'react'
import logo from '../../assets/logo.png'

function Conteudo({ voltar }) {
    const voltarLocal = () => {
        voltar()
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
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" onClick={voltarLocal} id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      <main className="container py-4 mt-5 pt-5">
        {/* Seção Resumo */}
        <section className="mb-5">
          <h2 className="mb-4">Olá, usuário!</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">IMC atual</h5>
                  <p className="display-6 fw-semibold text-primary">22.8</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Água hoje</h5>
                  <p className="h4">5 copos</p>
                  <button className="btn btn-outline-primary btn-sm mt-2">+ Adicionar</button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card text-center shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Refeições</h5>
                  <p className="h4">2 cadastradas</p>
                  <button className="btn btn-outline-success btn-sm mt-2">+ Nova refeição</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Progresso */}
        <section className="mb-5">
          <h2 className="mb-4">Progresso Diário</h2>
          <div className="row gy-3">
            <div className="col-md-4">
              <label className="form-label">Calorias</label>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: '65%' }}
                  aria-valuenow="1250"
                  aria-valuemin="0"
                  aria-valuemax="1920"
                >
                  1250 / 1920
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label">Água</label>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: '62%' }}
                  aria-valuenow="5"
                  aria-valuemin="0"
                  aria-valuemax="8"
                >
                  5 / 8
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <label className="form-label">Exercício</label>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: '75%' }}
                  aria-valuenow="1.5"
                  aria-valuemin="0"
                  aria-valuemax="2.0"
                >
                  1.5 / 2.0h
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Seção Estatísticas */}
      <section className="container py-4">
        <h2 className="mb-4">Estatísticas da Semana</h2>

        {/* Gráfico de Calorias */}
        <div className="row align-items-center mb-4">
          <div className="col-md-4">
            <h3 className="text-primary">1250 <span className="h6">Kcal</span></h3>
            <p className="text-muted">Meta: 1920 Kcal</p>
          </div>
          <div className="col-md-8">
            <div className="d-flex justify-content-between text-center">
              {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((dia, index) => {
                const heights = [44, 34, 100, 47, 32, 79, 24];
                const cores = ['primary', 'primary', 'warning', 'primary', 'primary', 'primary', 'primary'];
                return (
                  <div className="flex-fill mx-1 bg-light p-2 rounded" style={{ height: '100px' }} key={dia}>
                    <div
                      className={`bg-${cores[index]} w-100 mb-1 rounded`}
                      style={{ height: `${heights[index]}%` }}
                    ></div>
                    <small>{dia === 'Qua' ? <strong>{dia}</strong> : dia}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Blocos Estatísticos */}
        <div className="row row-cols-2 row-cols-md-4 g-3">
          <div className="col">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>🏃 Exercício</h5>
                <p className="fw-semibold">2.0 horas</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>❤️ BPM</h5>
                <p className="fw-semibold">86 bpm</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>⚖️ Peso</h5>
                <p className="fw-semibold">70 kg</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <h5>💧 Água</h5>
                <p className="fw-semibold">5 copos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-white border-top text-center py-3 mt-auto">
        <div className="small">
          <p className="mb-1">© 2025 <strong>NutriTracker</strong>. Todos os direitos reservados.</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-decoration-none">Política de Privacidade</a>
            <a href="#" className="text-decoration-none">Termos de Uso</a>
            <a href="#" className="text-decoration-none">Ajuda</a>
            <a href="#" className="text-decoration-none">Manual</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Conteudo;
