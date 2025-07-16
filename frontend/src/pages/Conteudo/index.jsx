import '../../index.css'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import GraficoAnel from '../../components/GraficoAnel'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import api from '../../services/api.js'

function Conteudo({ usuario, voltar, irParaPerfil }) {
  const [nomeUsuario, setNomeUsuario] = useState('')
  const [aguaConsumidaMl, setAguaConsumidaMl] = useState(0)
  const [metaAguaMl, setMetaAguaMl] = useState(2450)
  const [pesoKg, setPesoKg] = useState(0)
  const [alturaCm, setAlturaCm] = useState(null);
  const [nivelAtividade, setNivelAtividade] = useState('');
  const [imc, setImc] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [caloriasPorDiaSemana, setCaloriasPorDiaSemana] = useState([0,0,0,0,0,0,0]);
  const [refeicoesDia, setRefeicoesDia] = useState([]);
  const [mostrarTodasRefeicoes, setMostrarTodasRefeicoes] = useState(false);
  // Ordenar as refeições do dia por horário
  const refeicoesDiaOrdenadas = [...refeicoesDia].sort((a, b) => new Date(a.horario) - new Date(b.horario));

   const teste = () =>{
    console.log('teste')
  }


  // Controlador de agua =================================================================================
  const [aguaInputMl, setAguaInputMl] = useState(null) // serve para plotar dados no grafico
  const [aguaRecebe, setAguaRecebe] = useState(null) // serve para receber dados pagina 
  //======================================================================================================
  // Controlador de calorias =============================================================================
    const [caloriasInput, setCaloriasInput] = useState(0) // serve para plotar dados no grafico
    const [caloriasRecebe, setCaloriasRecebe] = useState(null) // serve para receber dados pagina 

    const [nomeRefeicao, setNomeRefeicao] = useState('')
    const [alimentoBusca, setAlimentoBusca] = useState('')
    const [resultadoAlimento, setResultadoAlimento] = useState(null)
    const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(100)

    const [listaResultados, setListaResultados] = useState([])

    const [buscandoAlimento, setBuscandoAlimento] = useState(false)
    const [erroBusca, setErroBusca] = useState('')
    const [alimentosRefeicao, setAlimentosRefeicao] = useState([])

  //======================================================================================================

  const [metaCalorias, setMetaCalorias] = useState(0)
  const [showRefeicaoModal, setShowRefeicaoModal] = useState(false)
  const [metaProteinas, setMetaProteinas] = useState(0);
  const [metaCarboidratos, setMetaCarboidratos] = useState(0);
  const [metaGorduras, setMetaGorduras] = useState(0);
  const [consumoProteinas, setConsumoProteinas] = useState(0);
  const [consumoCarboidratos, setConsumoCarboidratos] = useState(0);
  const [consumoGorduras, setConsumoGorduras] = useState(0);
  
 
  
 
 
  const irParaPerfilLocal = () => {
    irParaPerfil(usuario);
  }

  // Carrega dados do usuário do backend
  useEffect(() => {
    if (!usuario?.userId) return;

    const carregarPerfil = async () => {
      try {
        const response = await api.get('/getPerfil', {
          params: { userId: usuario.userId }
        });

        const dadosPerfil = response.data.perfil;

        console.log('Perfil carregado:', dadosPerfil);

        setNomeUsuario(dadosPerfil.nome);
        setPesoKg(parseFloat(dadosPerfil.peso));
        setAlturaCm(parseFloat(dadosPerfil.altura));
        setNivelAtividade(dadosPerfil.nivelAtividade);


        
        const alturaMetros = parseFloat(dadosPerfil.altura) / 100;
        const imcCalculado = parseFloat(dadosPerfil.peso) / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2));

      } catch (err) {
        console.error('Erro ao carregar perfil:', err);
        alert('Não foi possível carregar os dados do perfil.');
      }
    };

    carregarPerfil();
  }, [usuario]);


  useEffect(() => {

    if (!usuario?.userId || pesoKg == null || alturaCm == null || !nivelAtividade) return;


    const atualizarEMostrarMetas = async () => {
      try {
        // 1. Atualiza no backend
        await api.post('/setMeta', {
          userId: usuario.userId
        });

        console.log('Meta recalculada com sucesso.');

        // 2. Busca as metas atualizadas
        const response = await api.get('/getMetas', {
          params: { userId: usuario.userId }
        });

        if (response.status !== 200) {
          console.warn("Status diferente de 200:", response.status);
          return;
        }

        const meta = response.data.meta;

        if (meta) {
          console.log('Meta carregada:', meta);
          setMetaCalorias(meta.calorias);
          setMetaAguaMl(meta.agua);
          setMetaProteinas(meta.proteinas);
          setMetaCarboidratos(meta.carboidratos);
          setMetaGorduras(meta.gorduras);
        } else {
          console.warn('Nenhuma meta encontrada para o usuário.');
        }

      } catch (err) {
        console.error('Erro ao atualizar ou buscar metas:', err);
        alert('Erro ao processar metas do usuário.');
      }
    };

    atualizarEMostrarMetas();
  }, [pesoKg, alturaCm, nivelAtividade, usuario]);


// Novo useEffect para buscar metas (calorias e água)
/*useEffect(() => {
  if (!usuario?.userId) return;

  const buscarMeta = async () => {
    try {
      const response = await api.get('/getMetas', {
        params: { userId: usuario.userId }
      });

      if (response.status !== 200) {
        console.warn("Status diferente de 200:", response.status);
        return;
      }

      const meta = response.data.meta;

      console.log('Meta carregada:', meta);

      if (meta) {
        setMetaCalorias(meta.calorias);
        setMetaAguaMl(meta.agua);
      } else {
        console.warn('Nenhuma meta encontrada para o usuário.');
      }

    } catch (erro) {
      console.error('Erro ao buscar metas:', erro);
      alert('Erro ao buscar metas do usuário.');
    }
  };

  buscarMeta();
}, [usuario]);

*/

  // Manipuladores
  const voltarLocal = () => voltar()
  const handleCloseModal = () => {setShowModal(false);   // Manipuladores
  const voltarLocal = () => voltar()
  const handleCloseModal = () => {setShowModal(false); setAguaInputMl(null)}
  const handleShowModal = () => setShowModal(true)
(null)}
  const handleShowModal = () => setShowModal(true)



// Manipulação dos dados para o consumo do dia  ===============================================

  // Carregar calorias e agua de hoje ao montar o componente
  useEffect(() => {
      if (usuario.userId) {
       atualizarCaloriasAguaHoje();
      }
  }, [usuario]);

  // Buscar caloriase agua consumidas hoje
  async function atualizarCaloriasAguaHoje() {
    console.log('usuario: ', usuario)
    try {
      // Buscar água consumida nas últimas 24h (1 dia)
      const responseAgua = await api.get('/getConsumoAguaPorDia', {params: { userId: usuario.userId, dias: 1}});
      const quantidade = Object.values(responseAgua.data.consumoPorDia)[0] || 0;
      setAguaConsumidaMl(quantidade)

      const responseCalorias = await api.get(`/calorias-hoje/${usuario.userId}`);
      setCaloriasInput(responseCalorias.data.totalCalorias);

      // Buscar refeições do dia para calcular macros
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const dia = String(hoje.getDate()).padStart(2, '0');
      const dataHoje = `${ano}-${mes}-${dia}`;
      const responseRefeicoes = await api.get('/getrefeicoes', { params: { usuarioId: usuario.userId } });
      const refeicoes = responseRefeicoes.data;
      let prot = 0, carb = 0, gord = 0;
      refeicoes.forEach(refeicao => {
        // Verifica se a refeição é de hoje
        const dataRefeicao = refeicao.horario ? refeicao.horario.split('T')[0] : null;
        if (dataRefeicao === dataHoje) {
          prot += refeicao.proteinas || 0;
          carb += refeicao.carboidratos || 0;
          gord += refeicao.gorduras || 0;
        }
      });
      setConsumoProteinas(prot);
      setConsumoCarboidratos(carb);
      setConsumoGorduras(gord);

      // Buscar refeições dos últimos 7 dias para estatísticas semanais
      const hojeSemana = new Date();
      // Encontrar a segunda-feira da semana atual
      const diaSemana = hojeSemana.getDay(); // 0=Dom, 1=Seg, ..., 6=Sáb
      const diffSegunda = diaSemana === 0 ? -6 : 1 - diaSemana; // se domingo, volta 6 dias, senão ajusta para segunda
      const segundaSemana = new Date(hojeSemana);
      segundaSemana.setDate(hojeSemana.getDate() + diffSegunda);
      segundaSemana.setHours(0,0,0,0);
      const domingoSemana = new Date(segundaSemana);
      domingoSemana.setDate(segundaSemana.getDate() + 6);
      domingoSemana.setHours(23,59,59,999);
      const responseRefeicoesSemana = await api.get('/getrefeicoes', { params: { usuarioId: usuario.userId } });
      const refeicoesSemana = responseRefeicoesSemana.data;
      // Agrupar calorias por dia da semana (segunda=0, ..., domingo=6)
      const caloriasPorDia = [0,0,0,0,0,0,0];
      refeicoesSemana.forEach(refeicao => {
        if (!refeicao.horario) return;
        const data = new Date(refeicao.horario);
        if (data >= segundaSemana && data <= domingoSemana) {
          // 0=segunda, ..., 6=domingo
          let dia = data.getDay();
          dia = dia === 0 ? 6 : dia - 1;
          caloriasPorDia[dia] += refeicao.calorias || 0;
        }
      });
      setCaloriasPorDiaSemana(caloriasPorDia);

      // Buscar refeições do dia para mostrar na lista
      const refeicoesDiaHoje = refeicoes.filter(refeicao => {
        const dataRefeicao = refeicao.horario ? refeicao.horario.split('T')[0] : null;
        return dataRefeicao === dataHoje;
      });
      setRefeicoesDia(refeicoesDiaHoje);
    } catch (error) {
      console.error('Erro ao buscar: ', error);
    }
  }

  const handleSalvarAgua = async () => {
    console.log('Agua recebe: ', aguaRecebe);

    if (aguaRecebe > 0) {
      try {
        const response = await api.post('/setConsumoAgua', {
          usuarioId: usuario.userId,  
          quantidade: aguaRecebe
        });

        setAguaRecebe(null);
        await atualizarCaloriasAguaHoje(); // Atualiza os dados na tela
      } catch (error) {
        console.error('Erro ao salvar consumo de água:', error);
      }
    }

    handleCloseModal(); // Fecha o modal mesmo que não salve
  };

  // Salvar refeição no backend
  const salvarRefeicao = async () =>{

    console.log('chamou ascjkjkjnckjkcjnkjv')
    if (alimentosRefeicao.length === 0) {
      alert('Adicione pelo menos um alimento à refeição');
      return;
    }

    if (!nomeRefeicao.trim()) {
      alert('Digite um nome para a refeição');
      return;
    }
    console.log('usuario: ',usuario)
    try {
      const alimentosParaSalvar = alimentosRefeicao.map(item => ({
        nomeAlimento: item.alimento.product_name || 'Nome não disponível',
        quantidade: item.quantidade,
        calorias: parseFloat(item.calorias) || 0,
        proteinas: parseFloat(item.alimento.nutriments?.proteins) || 0,
        carboidratos: parseFloat(item.alimento.nutriments?.carbohydrates) || 0,
        gorduras: parseFloat(item.alimento.nutriments?.fat) || 0,
        codigoOpenFood: item.alimento.code || null
      }));
      console.log('usuario: ',usuario)

      try {
        const response = await api.post('/refeicoes', {
        usuarioId: usuario.userId,
        nome: nomeRefeicao,
        alimentos: alimentosParaSalvar
         });

      } catch (error) {
        console.log('erro bosta:', error)
      }


      // Atualizar calorias consumidas hoje
      await atualizarCaloriasAguaHoje();

      // Limpar formulário
      setAlimentosRefeicao([]);
      setNomeRefeicao('');
      setShowRefeicaoModal(false);

      alert('Refeição salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar refeição:', error);
      alert('Erro ao salvar refeição. Tente novamente.');
    }
  }

    // Adicionar alimento à refeição
  const adicionarAlimentoNaRefeicao = async () =>{
    if (!resultadoAlimento) return
    const calorias = calcularCaloriasPorQuantidade(resultadoAlimento, quantidadeSelecionada)
    setAlimentosRefeicao(prev => [
      ...prev,
      {
        alimento: resultadoAlimento,
        quantidade: quantidadeSelecionada,
        calorias: calorias,
      }
    ])
    setResultadoAlimento(null)
    setQuantidadeSelecionada(100)
    setListaResultados([])
    setAlimentoBusca('')
  }

  // Remover alimento da refeição
  const removerAlimentoDaRefeicao= async (idx) => {
    setAlimentosRefeicao(prev => prev.filter((_, i) => i !== idx))
  }




//===========================================================================================












  // NOVO: Função para buscar alimento na Open Food Facts
  async function buscarAlimento(nome) {
    setBuscandoAlimento(true)
    setErroBusca('')
    setResultadoAlimento(null)
    setListaResultados([])
    try {
      const response = await fetch(
        `http://localhost:3000/api/openfoodfacts?search=${encodeURIComponent(nome)}`
      )
      const data = await response.json()
      if (data.products && data.products.length > 0) {
        setListaResultados(data.products.slice(0, 5))
      } else {
        setErroBusca('Nenhum alimento encontrado.')
      }
    } catch (e) {
      setErroBusca('Erro ao buscar alimento.')
    }
    setBuscandoAlimento(false)
  }

  // Quando o usuário seleciona um alimento da lista
  function selecionarAlimento(alimento) {
    setResultadoAlimento(alimento)
  }

  // Função utilitária para calcular calorias se não houver valor oficial
  function calcularCaloriasEstimadas(nutriments) {
    const proteinas = parseFloat(nutriments?.proteins) || 0;
    const carboidratos = parseFloat(nutriments?.carbohydrates) || 0;
    const gorduras = parseFloat(nutriments?.fat) || 0;
    if (proteinas === 0 && carboidratos === 0 && gorduras === 0) return null;
    return (proteinas * 4 + carboidratos * 4 + gorduras * 9).toFixed(0);
  }

  // Função para calcular calorias proporcionais à quantidade
  function calcularCaloriasPorQuantidade(alimento, quantidade) {
    const nutr = alimento.nutriments || {}
    // calorias por 100g/ml
    let kcal = nutr.energy_kcal
    if (!kcal) {
      const estimada = calcularCaloriasEstimadas(nutr)
      kcal = estimada ? parseFloat(estimada) : null
    }
    if (!kcal) return null
    // valor padrão é por 100g/ml
    return ((kcal * quantidade) / 100).toFixed(1)
  }



  // Calorias totais da refeição
  const totalCaloriasRefeicao = alimentosRefeicao.reduce((acc, item) => acc + (parseFloat(item.calorias) || 0), 0).toFixed(1)

  const aguaConsumidaL = (aguaConsumidaMl / 1000).toFixed(1)
  const metaAguaL = (metaAguaMl / 1000).toFixed(1)


  







  return (
    <>
      <div className="d-flex flex-column min-vh-100">

      {/* Navbar fixa */}
      <nav
        className="navbar navbar-expand-lg bg-white py-3 px-4 position-fixed w-100 shadow-sm"
        style={{ zIndex: 1000, top: 0, height: '80px' }}
      >
        <div className="container position-relative d-flex justify-content-center align-items-center">

          {/* Logo centralizada */}
          <a
            className="navbar-brand position-absolute top-50 start-50 translate-middle d-flex align-items-center"
            href="#"
            id="logo"
          >
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-md-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>

          {/* Botão de sair no canto direito */}
          <button
            className="position-absolute fw-bold end-0"
            onClick={voltarLocal}
            style={{
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '20px',
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            Sair
          </button>
        </div>
      </nav>



      <main className="container py-4 mt-5 pt-5 flex-grow-1">
        <header className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h2>Olá, {nomeUsuario}!</h2>
            <p className="text-muted mb-0">Aqui está o seu resumo de hoje.</p>
          </div>
          <button onClick={irParaPerfilLocal} className="btn outlined">Editar Perfil</button>
        </header>

        <div className="row g-4">
          <section className="col-md-7">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title mb-4">Progresso de Hoje</h5>
                <div className="row text-center">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <GraficoAnel valor={caloriasInput} meta={Math.round(metaCalorias)} cor="#dc3545" unidade="Kcal" />
                      <p className="mt-2 mb-0"><strong>Calorias</strong></p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex flex-column align-items-center">
                      <GraficoAnel valor={aguaConsumidaMl} meta={metaAguaMl} cor="#0dcaf0" unidade="ml" />
                      <p className="mt-2 mb-0"><strong>Água</strong></p>
                    </div>
                  </div>
                </div>
                {/* Gráficos de macros */}
                <div className="row text-center justify-content-center align-items-center mt-2" style={{gap: '0'}}>
                  <div className="col-auto mb-2 px-1">
                    <GraficoAnel valor={Math.round(consumoProteinas)} meta={Math.round(metaProteinas)} cor="#007bff" unidade="g" tamanho={90} />
                    <div className="small">Proteínas</div>
                  </div>
                  <div className="col-auto mb-2 px-1">
                    <GraficoAnel valor={Math.round(consumoCarboidratos)} meta={Math.round(metaCarboidratos)} cor="#ffc107" unidade="g" tamanho={90} />
                    <div className="small">Carboidratos</div>
                  </div>
                  <div className="col-auto mb-2 px-1">
                    <GraficoAnel valor={Math.round(consumoGorduras)} meta={Math.round(metaGorduras)} cor="#28a745" unidade="g" tamanho={90} />
                    <div className="small">Gorduras</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="col-md-5">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title mb-3">Registro Rápido</h5>
                <div className="d-grid gap-2">
                  <button className="btn secondary" onClick={() => setShowRefeicaoModal(true)}>+ Nova Refeição</button>
                  <button onClick={handleShowModal} className="btn btn-info text-white btn-sm">+ Adicionar Água</button>
                </div>
              </div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Estatísticas da Semana</h5>
                <div className="d-flex justify-content-between text-center mb-3">
                  {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((dia, index) => {
                    // Calcular altura proporcional
                    const maxCal = Math.max(...caloriasPorDiaSemana, 1); // evitar divisão por zero
                    const altura = Math.round((caloriasPorDiaSemana[index] / maxCal) * 100);
                    // Descobre o dia da semana atual (0=Domingo, 1=Segunda, ..., 6=Sábado)
                    const hoje = new Date();
                    let diaSemanaAtual = hoje.getDay(); // 0=Dom, 1=Seg, ..., 6=Sáb
                    let indexDiaAtual = diaSemanaAtual === 0 ? 6 : diaSemanaAtual - 1;
                    // Definir cor da barra
                    let cor = '#e0e0e0'; // padrão: cinza para dias futuros
                    if (index < indexDiaAtual) {
                      // Dias passados
                      cor = caloriasPorDiaSemana[index] >= metaCalorias ? '#28a745' : '#dc3545'; // verde se bateu meta, vermelho se não
                    } else if (index === indexDiaAtual) {
                      cor = '#007bff'; // azul para o dia atual
                    }
                    return (
                      <div className="flex-fill mx-1 rounded d-flex flex-column justify-content-end" style={{ height: '100px' }} key={dia}>
                        <div className="w-100 mb-1 rounded" style={{ height: `${altura}%`, backgroundColor: cor, transition: 'height 0.5s' }}></div>
                        <small>{index === indexDiaAtual ? <strong>{dia}</strong> : dia}</small>
                        <div className="small text-muted">{Math.round(caloriasPorDiaSemana[index])} kcal</div>
                      </div>
                    )
                  })}
                </div>
                <hr className="my-3" />
                <div className="row text-center">
                  <div className="col-6">
                    <h5>IMC</h5>
                    <p className="fw-semibold">{imc}</p>
                  </div>
                  <div className="col-6">
                    <h5>Peso</h5>
                    <p className="fw-semibold">{pesoKg}kg</p>
                  </div>
                </div>
                {/* Quadro de refeições do dia */}
                <div className="mt-3">
                  <div className="card p-2 mb-2">
                    <strong>Última refeição do dia</strong>
                    {refeicoesDia.length > 0 ? (
                      <div className="mt-2">
                        <div><strong>{refeicoesDiaOrdenadas[refeicoesDiaOrdenadas.length-1].nome}</strong></div>
                        <div className="text-muted small">{Math.round(refeicoesDiaOrdenadas[refeicoesDiaOrdenadas.length-1].calorias)} kcal</div>
                      </div>
                    ) : (
                      <div className="text-muted small">Nenhuma refeição registrada hoje.</div>
                    )}
                  </div>
                  {refeicoesDia.length > 1 && (
                    <Button variant="outline-primary" size="sm" className="mb-2" onClick={() => setMostrarTodasRefeicoes(m => !m)}>
                      {mostrarTodasRefeicoes ? 'Ocultar todas as refeições do dia' : 'Ver todas as refeições do dia'}
                    </Button>
                  )}
                  {mostrarTodasRefeicoes && refeicoesDia.length > 1 && (
                    <div className="card p-2">
                      <strong>Todas as refeições do dia</strong>
                      <ul className="list-group list-group-flush mt-2">
                        {refeicoesDiaOrdenadas.map((ref, idx) => (
                          <li key={idx} className="list-group-item px-0 py-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <span>{ref.nome}</span>
                              <span className="text-muted small">{Math.round(ref.calorias)} kcal</span>
                            </div>
                            {Array.isArray(ref.alimentos) && ref.alimentos.length > 0 && (
                              <ul className="small text-muted ms-2 mb-1" style={{listStyle: 'circle'}}>
                                {ref.alimentos.map((al, i) => (
                                  <li key={i}>
                                    {al.nomeAlimento} {al.quantidade}g
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

    <footer className="bg-white border-top text-center py-3 mt-auto">
      <div className="small">
        <p className="mb-1">© 2025 <strong>NutriTracker</strong>. Todos os direitos reservados.</p>
      </div>
    </footer>

      
    </div>

    {/* MODAL NOVA CONSUMO DE AGUA */}          
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
            onChange={e => setAguaRecebe(parseInt(e.target.value))}
            placeholder="Ex: 250"
          />
          <small className="text-muted">Valor em ml</small>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSalvarAgua}>Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* MODAL NOVA REFEIÇÃO */}
      <Modal show={showRefeicaoModal} onHide={() => setShowRefeicaoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Refeição</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="mb-3">
           <label className="form-label">Nome da refeição:</label>
           <input
             type="text"
             className="form-control"
             value={nomeRefeicao}
             onChange={e => setNomeRefeicao(e.target.value)}
             placeholder="Ex: Café da manhã, Almoço, Jantar..."
           />
         </div>
         <hr />
          <label htmlFor="alimentoBusca" className="form-label">Digite o nome do alimento:</label>
          <input
            id="alimentoBusca"
            type="text"
            className="form-control mb-2"
            value={alimentoBusca}
            onChange={e => setAlimentoBusca(e.target.value)}
            placeholder="Ex: banana, arroz, pão..."
          />
          <Button
            variant="success"
            className="mb-2"
            onClick={() => buscarAlimento(alimentoBusca)}
            disabled={buscandoAlimento || !alimentoBusca.trim()}
          >
            {buscandoAlimento ? 'Buscando...' : 'Buscar'}
          </Button>
          {erroBusca && <div className="text-danger small mb-2">{erroBusca}</div>}
          {/* Lista de resultados para seleção */}
          {listaResultados.length > 0 && !resultadoAlimento && (
            <div className="list-group mb-2">
              <div className="mb-1 small">Selecione o alimento correto:</div>
              {listaResultados.map((item, idx) => (
                <button
                  key={item.code || idx}
                  className="list-group-item list-group-item-action d-flex align-items-center"
                  onClick={() => selecionarAlimento(item)}
                >
                  {item.image_thumb_url && (
                    <img src={item.image_thumb_url} alt="thumb" style={{width: 32, height: 32, objectFit: 'cover', marginRight: 8, borderRadius: 4}} />
                  )}
                  <span>{item.product_name || 'Nome não disponível'}</span>
                </button>
              ))}
            </div>
          )}
          {/* Exibe dados nutricionais do alimento selecionado */}
          {resultadoAlimento && (
            <div className="border rounded p-2 mt-2">
              <strong>{resultadoAlimento.product_name || 'Nome não disponível'}</strong>
              <ul className="mb-0">
                <li>
                  Calorias: {
                    resultadoAlimento.nutriments?.energy_kcal
                      ? `${resultadoAlimento.nutriments.energy_kcal} kcal`
                      : calcularCaloriasEstimadas(resultadoAlimento.nutriments)
                        ? `${calcularCaloriasEstimadas(resultadoAlimento.nutriments)} kcal (estimado)`
                        : 'N/A'
                  } por 100g/ml
                </li>
                <li>Proteínas: {resultadoAlimento.nutriments?.proteins || 'N/A'} g</li>
                <li>Carboidratos: {resultadoAlimento.nutriments?.carbohydrates || 'N/A'} g</li>
                <li>Gorduras: {resultadoAlimento.nutriments?.fat || 'N/A'} g</li>
              </ul>
              <div className="mt-2">
                <label className="form-label">Quantidade consumida (g/ml):</label>
                <input
                  type="number"
                  min="1"
                  className="form-control mb-2"
                  value={quantidadeSelecionada}
                  onChange={e => setQuantidadeSelecionada(Number(e.target.value))}
                />
                <div className="mb-2 small text-muted">Valores nutricionais são geralmente por 100g/ml. Informe a quantidade consumida para calcular o valor proporcional.</div>
                <Button variant="primary" onClick={adicionarAlimentoNaRefeicao}>
                  Adicionar alimento à refeição
                </Button>
                <Button variant="outline-primary" size="sm" className="ms-2" onClick={() => setResultadoAlimento(null)}>
                  Buscar outro alimento
                </Button>
              </div>
            </div>
          )}
          {/* Lista de alimentos adicionados à refeição */}
         {alimentosRefeicao.length > 0 && (
           <div className="mt-4">
             <h6>Alimentos adicionados:</h6>
             <ul className="list-group mb-2">
               {alimentosRefeicao.map((item, idx) => (
                 <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                   <span>
                     {item.alimento.product_name || 'Nome não disponível'}<br />
                     <small className="text-muted">{item.quantidade}g/ml</small>
                   </span>
                   <span>
                     {item.calorias ? `${item.calorias} kcal` : 'N/A'}
                     <Button variant="danger" size="sm" className="ms-2" onClick={() => removerAlimentoDaRefeicao(idx)}>
                       Remover
                     </Button>
                   </span>
                 </li>
               ))}
             </ul>

             <div className="fw-bold">Total de calorias da refeição: {totalCaloriasRefeicao} kcal</div>
             <Button 
               variant="success" 
               className="mt-3 w-100" 
               onClick={salvarRefeicao}
               disabled={!nomeRefeicao.trim()}
             >
               Salvar Refeição
             </Button>
           </div>
         )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRefeicaoModal(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Conteudo
