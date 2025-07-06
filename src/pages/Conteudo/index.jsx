import '../../index.css'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import GraficoAnel from '../../components/GraficoAnel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Conteudo({ voltar }) {
  //Estado iniciao do usuário teste (usando useState para fazer a ligação com o Backend depois)
  const [nomeUsuario, setNomeUsuario] = useState('Adrian');
  const [aguaConsumidaMl, setAguaConsumidaMl] = useState(0);
  const [metaAguaMl, setMetaAguaMl] = useState(2450);
  const [pesoKg, setPesoKg] = useState(70);
  const [imc, setImc] = useState(22.8);
  const [showModal, setShowModal] = useState(false);
  const [aguaInputMl, setAguaInputMl] = useState(250);
  const [calorias, setCalorias] = useState(0);
  const [metaCalorias, setMetaCalorias] = useState(2900);

  //Calcular a meta de água de cada pessoa
  useEffect(() => {
    if (pesoKg > 0) {
      const metaCalculada = Math.round(pesoKg * 35);
      setMetaAguaMl(metaCalculada);
    }
  }, [pesoKg]);

  //Funções de interação
  const voltarLocal = () => {
    voltar()
  }

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSalvarAgua = () => {
    if (aguaInputMl > 0) {
      setAguaConsumidaMl(aguaConsumidaMl + aguaInputMl);
    }
    handleCloseModal();
  };

  const aguaConsumidaL = (aguaConsumidaMl / 1000).toFixed(1);
  const metaAguaL = (metaAguaMl / 1000).toFixed(1);

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
        <header className="mb-4">
          <h2 className="mb-4">Olá, {nomeUsuario}!</h2>
          <p className="text-muted">Aqui está o seu resumo de hoje.</p>
        </header>

        <div className="row g-4">
          {/* Coluna progresso diário */}
          <section className="col-md-7">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">Progresso de Hoje</h5>
                <div className="row text-center">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <GraficoAnel
                        valor={calorias}
                        meta={metaCalorias}
                        cor="#dc3545"
                        unidade="Kcal"
                      />
                      <p className="mt-2 mb-0"><strong>Calorias</strong></p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <GraficoAnel
                        valor={aguaConsumidaMl}
                        meta={metaAguaMl}
                        cor="#0dcaf0"
                        unidade="ml"
                      />
                      <p className="mt-2 mb-0"><strong>Água</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Coluna Secundária*/}
          <section className="col-md-5">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Registro Rápido</h5>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary btn-sm">+ Nova Refeição</button>
                  <button onClick={handleShowModal} className="btn btn-info text-white btn-sm">+ Adicionar Água</button>
                </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Estatísticas da Semana</h5>
                <div className="d-flex justify-content-between text-center mb-3">
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
                <hr className="my-3" />
                <div className="row text-center">
                  <div className="col-6">
                    <h5> IMC</h5>
                    <p className="fw-semibold">{imc}</p>
                  </div>
                  <div className="col-6">
                    <h5>Peso</h5>
                    <p className="fw-semibold">70 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Água</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Digite a quantidade de água que você bebeu:</p>
          <input
            type="number"
            className="form-control"
            value={aguaInputMl}
            onChange={e => setAguaInputMl(parseInt(e.target.value))}
            placeholder="Ex: 250"
          />
          <small className="text-muted">Valor em ml</small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSalvarAgua}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  );
}

export default Conteudo;
