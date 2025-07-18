// Importa o CSS principal global para estilização
import '../../index.css'

// Importa React e hooks necessários
import React, { useEffect, useState, useRef } from 'react'

// Importa o logotipo da aplicação (utilizado no topo da interface)
import logo from '../../assets/logo.png'

// Importa componente de gráfico em anel (ex: para exibir distribuição de macronutrientes)
import GraficoAnel from '../../components/GraficoAnel'

// Importa componente de gráfico de barra horizontal (ex: progresso de proteínas, carboidratos etc.)
import GraficoBarraHorizontal from '../../components/GraficoBarra'

// Importa componentes de UI do Bootstrap para botões e modais
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// Importa instância do Axios com configuração de API
import api from '../../services/api.js'

// Importa estilos específicos desta página
import "./style.css"


function Conteudo({ usuario, voltar, irParaPerfil }) {
  // Informações básicas do usuário
  const [nomeUsuario, setNomeUsuario] = useState('') // Nome do usuário exibido no dashboard
  const [pesoKg, setPesoKg] = useState(0)            // Peso atual do usuário em kg
  const [alturaCm, setAlturaCm] = useState(null)     // Altura do usuário em cm
  const [imc, setImc] = useState(0)                  // Índice de Massa Corporal calculado
  const [objetivo, setObjetivo] = useState('')       // Objetivo do usuário (ex: emagrecer, manter, ganhar massa)
  const [nivelAtividade, setNivelAtividade] = useState('') // Nível de atividade física (ex: leve, moderado, intenso)
  const [getPerfil, setPerfil] = useState(false)     // Booleano que indica se o perfil já foi carregado da API

  // Controle do consumo de água
  const [aguaConsumidaMl, setAguaConsumidaMl] = useState(0)   // Total de água consumida hoje (ml)
  const [metaAguaMl, setMetaAguaMl] = useState(2450)          // Meta diária de consumo de água
  const [aguaInputMl, setAguaInputMl] = useState(null)        // Quantidade que o usuário digitou (input)
  const [aguaRecebe, setAguaRecebe] = useState(null)          // Quantidade recebida da API

  // Controle de calorias e nutrientes
  const [caloriasInput, setCaloriasInput] = useState(0)       // Calorias da refeição atual a ser registrada
  const [caloriasRecebe, setCaloriasRecebe] = useState(null)  // Calorias recebidas da API
  const [metaCalorias, setMetaCalorias] = useState(0)         // Meta de calorias diárias
  const [metaProteinas, setMetaProteinas] = useState(0)       // Meta de proteínas diárias
  const [metaCarboidratos, setMetaCarboidratos] = useState(0) // Meta de carboidratos diários
  const [metaGorduras, setMetaGorduras] = useState(0)         // Meta de gorduras diárias

  const [consumoProteinas, setConsumoProteinas] = useState(0)     // Total consumido de proteínas
  const [consumoCarboidratos, setConsumoCarboidratos] = useState(0) // Total consumido de carboidratos
  const [consumoGorduras, setConsumoGorduras] = useState(0)       // Total consumido de gorduras

  // Controle de sugestões e visualizações
  const [getSugestaoComida, setSugestaoComida] = useState(null) // Sugestão de alimento enviada pela IA/API
  const [getPlotarComida, setPlotarComida] = useState(null)     // Alimento selecionado a ser plotado no gráfico

  // Controle de refeições e alimentos
  const [refeicoesDia, setRefeicoesDia] = useState([])               // Lista de refeições feitas no dia
  const [mostrarTodasRefeicoes, setMostrarTodasRefeicoes] = useState(false) // Mostra ou oculta refeições antigas
  const [refeicoesDiaOrdenadas] = [  // Ordena as refeições pelo horário (para exibição cronológica)
    [...refeicoesDia].sort((a, b) => new Date(a.horario) - new Date(b.horario))
  ]

  const [nomeRefeicao, setNomeRefeicao] = useState('')         // Nome da refeição atual (ex: almoço)
  const [alimentoBusca, setAlimentoBusca] = useState('')       // Termo digitado na busca de alimentos
  const [resultadoAlimento, setResultadoAlimento] = useState(null) // Resultado da busca no banco
  const [quantidadeSelecionada, setQuantidadeSelecionada] = useState(100) // Quantidade do alimento selecionado (g)

  const [listaResultados, setListaResultados] = useState([])   // Lista de alimentos retornados da busca
  const [buscandoAlimento, setBuscandoAlimento] = useState(false) // Flag para exibir "carregando"
  const [erroBusca, setErroBusca] = useState('')               // Mensagem de erro, caso a busca falhe
  const [alimentosRefeicao, setAlimentosRefeicao] = useState([]) // Lista de alimentos da refeição atual

  // Controle de modais (janelas flutuantes)
  const [showModal, setShowModal] = useState(false)            // Exibe modal principal (geral)
  const [showRefeicaoModal, setShowRefeicaoModal] = useState(false) // Exibe modal de nova refeição

  // Dados nutricionais semanais (usado para gráfico de calorias por dia da semana)
  const [caloriasPorDiaSemana, setCaloriasPorDiaSemana] = useState([0, 0, 0, 0, 0, 0, 0]);

  // Função auxiliar para redirecionar para a tela de perfil, passando o objeto do usuário atual
  const irParaPerfilLocal = () => {
    irParaPerfil(usuario); // Chama a função de navegação com o usuário atual
  }

  // Carrega os dados do perfil do usuário ao montar o componente ou quando o `usuario` mudar
  useEffect(() => {
    if (!usuario?.userId) return; // Se não houver userId, não faz nada

    const carregarPerfil = async () => {
      try {
        // Faz a requisição para obter os dados do perfil no backend
        const response = await api.get('/getPerfil', {
          params: { userId: usuario.userId } // Passa o userId como parâmetro
        });

        const dadosPerfil = response.data.perfil; // Extrai os dados do perfil da resposta

        // Atualiza os estados locais com os dados recebidos
        setNomeUsuario(dadosPerfil.nome);
        setPesoKg(parseFloat(dadosPerfil.peso));
        setAlturaCm(parseFloat(dadosPerfil.altura));
        setNivelAtividade(dadosPerfil.nivelAtividade);
        setPerfil(dadosPerfil);
        setObjetivo(dadosPerfil.objetivo);

        // Calcula o IMC (Índice de Massa Corporal) com base em peso e altura
        const alturaMetros = parseFloat(dadosPerfil.altura) / 100;
        const imcCalculado = parseFloat(dadosPerfil.peso) / (alturaMetros * alturaMetros);
        setImc(imcCalculado.toFixed(2)); // Armazena o IMC com duas casas decimais

      } catch (err) {
        console.error('Erro ao carregar perfil:', err);
        alert('Não foi possível carregar os dados do perfil.');
      }
    };

    carregarPerfil(); // Executa a função ao carregar
  }, [usuario]); // Executa o efeito sempre que `usuario` mudar


  // Carrega e atualiza metas do usuário após os dados físicos e objetivo estarem definidos
  useEffect(() => {
    // Verifica se os dados necessários estão disponíveis antes de continuar
    if (!usuario?.userId || pesoKg == null || alturaCm == null || !nivelAtividade || !objetivo) return;

    const atualizarEMostrarMetas = async () => {
      try {
        // Envia os dados para o backend para atualizar ou recalcular as metas
        await api.post('/setMeta', {
          userId: usuario.userId // Apenas o userId é necessário, o backend usará os dados salvos
        });

        // Busca as metas atualizadas no backend
        const response = await api.get('/getMetas', {
          params: { userId: usuario.userId } // Passa o userId como parâmetro
        });

        if (response.status !== 200) {
          console.warn("Status diferente de 200:", response.status);
          return;
        }

        const meta = response.data.meta; // Extrai os dados da meta da resposta

        if (meta) {
          // Atualiza os estados com os valores das metas recebidas
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

    atualizarEMostrarMetas(); // Executa a função
  }, [pesoKg, alturaCm, nivelAtividade, objetivo, usuario]); // Executa o efeito quando qualquer um desses dados mudar

  // Manipuladores de interface
  const voltarLocal = () => voltar(); // Função auxiliar para voltar à tela anterior

  const handleCloseModal = () => {
    setShowModal(false);       // Fecha o modal
    setAguaInputMl(null);      // Limpa o campo de entrada de água
  };

  const handleShowModal = () => setShowModal(true); // Abre o modal

  // =====================================================================
  // FUNÇÃO PRINCIPAL DE ATUALIZAÇÃO DE DADOS DO DIA (calorias e água)
  // =====================================================================

  // Executa ao montar o componente (carrega calorias e água consumidas no dia)
  useEffect(() => {
    if (usuario.userId) {
      atualizarCaloriasAguaHoje();
    }
  }, [usuario.userId]);

  // Atualiza os dados de consumo diário
  async function atualizarCaloriasAguaHoje() {
    try {
      // ==================== Consumo de água ====================
      const responseAgua = await api.get('/getConsumoAguaPorDia', {
        params: { usuarioId: usuario.userId, dias: 1 },
      });
      const quantidade = Object.values(responseAgua.data.consumoPorDia)[0] || 0;
      setAguaConsumidaMl(quantidade);

      // ==================== Consumo de calorias ====================
      const responseCalorias = await api.get('/getCaloriasHoje', {
        params: { usuarioId: usuario.userId },
      });
      setCaloriasInput(responseCalorias.data.totalCalorias);

      // ==================== Cálculo de macros ====================
      const hoje = new Date();
      const ano = hoje.getFullYear();
      const mes = String(hoje.getMonth() + 1).padStart(2, '0');
      const dia = String(hoje.getDate()).padStart(2, '0');
      const dataHoje = `${ano}-${mes}-${dia}`;

      const responseRefeicoes = await api.get('/getRefeicoes', {
        params: { usuarioId: usuario.userId },
      });
      const refeicoes = responseRefeicoes.data;

      // Acumuladores para os macros
      let prot = 0, carb = 0, gord = 0;

      // Soma os valores das refeições de hoje
      refeicoes.forEach(refeicao => {
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

      // ==================== Calorias por dia da semana ====================
      const hojeSemana = new Date();
      const diaSemana = hojeSemana.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
      const diffSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;
      const segundaSemana = new Date(hojeSemana);
      segundaSemana.setDate(hojeSemana.getDate() + diffSegunda);
      segundaSemana.setHours(0, 0, 0, 0);

      const domingoSemana = new Date(segundaSemana);
      domingoSemana.setDate(segundaSemana.getDate() + 6);
      domingoSemana.setHours(23, 59, 59, 999);

      const responseRefeicoesSemana = await api.get('/getrefeicoes', {
        params: { usuarioId: usuario.userId },
      });
      const refeicoesSemana = responseRefeicoesSemana.data;

      // Inicializa vetor com calorias por dia da semana
      const caloriasPorDia = [0, 0, 0, 0, 0, 0, 0]; // segunda a domingo
      refeicoesSemana.forEach(refeicao => {
        if (!refeicao.horario) return;
        const data = new Date(refeicao.horario);
        if (data >= segundaSemana && data <= domingoSemana) {
          let dia = data.getDay(); // 0 = Domingo
          dia = dia === 0 ? 6 : dia - 1; // Ajuste: segunda=0, ..., domingo=6
          caloriasPorDia[dia] += refeicao.calorias || 0;
        }
      });

      setCaloriasPorDiaSemana(caloriasPorDia);

      // ==================== Lista de refeições de hoje ====================
      const refeicoesDiaHoje = refeicoes.filter(refeicao => {
        const dataRefeicao = refeicao.horario ? refeicao.horario.split('T')[0] : null;
        return dataRefeicao === dataHoje;
      });
      setRefeicoesDia(refeicoesDiaHoje);

    } catch (error) {
      console.error('Erro ao buscar: ', error);
    }
  }

  // Salva o consumo de água no backend
  const handleSalvarAgua = async () => {
    // Só salva se a quantidade recebida for maior que zero
    if (aguaRecebe > 0) {
      try {
        // Envia a requisição POST para salvar o consumo de água
        const response = await api.post('/setConsumoAgua', {
          usuarioId: usuario.userId,
          quantidade: aguaRecebe
        });

        setAguaRecebe(null); // Limpa o estado de entrada de água após salvar
        await atualizarCaloriasAguaHoje(); // Atualiza os dados exibidos na tela (água e calorias)
      } catch (error) {
        console.error('Erro ao salvar consumo de água:', error);
      }
    }

    handleCloseModal(); // Fecha o modal, independente de salvar ou não
  };

  // Salva uma nova refeição com seus alimentos no backend
  const salvarRefeicao = async () => {
    // Valida se há ao menos um alimento na refeição
    if (alimentosRefeicao.length === 0) {
      alert('Adicione pelo menos um alimento à refeição');
      return;
    }

    // Valida se o nome da refeição foi preenchido
    if (!nomeRefeicao.trim()) {
      alert('Digite um nome para a refeição');
      return;
    }

    try {
      // Mapeia os alimentos para o formato esperado pela API
      const alimentosParaSalvar = alimentosRefeicao.map(item => ({
        nomeAlimento: item.alimento.product_name || 'Nome não disponível',
        quantidade: item.quantidade,
        calorias: parseFloat(item.calorias) || 0,
        proteinas: parseFloat(item.alimento.nutriments?.proteins) || 0,
        carboidratos: parseFloat(item.alimento.nutriments?.carbohydrates) || 0,
        gorduras: parseFloat(item.alimento.nutriments?.fat) || 0,
        codigoOpenFood: item.alimento.code || null
      }));

      // Envia os dados da refeição para o backend
      const response = await api.post('/refeicoes', {
        usuarioId: usuario.userId,
        nome: nomeRefeicao,
        alimentos: alimentosParaSalvar
      });

      // Atualiza as calorias consumidas hoje após salvar
      await atualizarCaloriasAguaHoje();

      // Limpa o formulário após salvar
      setAlimentosRefeicao([]);
      setNomeRefeicao('');
      setShowRefeicaoModal(false);

      //alert('Refeição salva com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar refeição:', error);
      //alert('Erro ao salvar refeição. Tente novamente.');
    }
  };

  // Adiciona um alimento selecionado à lista da refeição atual
  const adicionarAlimentoNaRefeicao = async () => {
    if (!resultadoAlimento) return;

    // Calcula as calorias com base na quantidade selecionada
    const calorias = calcularCaloriasPorQuantidade(resultadoAlimento, quantidadeSelecionada);

    // Adiciona o alimento à lista com seus dados e quantidade
    setAlimentosRefeicao(prev => [
      ...prev,
      {
        alimento: resultadoAlimento,
        quantidade: quantidadeSelecionada,
        calorias: calorias,
      }
    ]);

    // Limpa os campos de busca e resultados após adicionar
    setResultadoAlimento(null);
    setQuantidadeSelecionada(100);
    setListaResultados([]);
    setAlimentoBusca('');
  };

  // Remove um alimento da lista da refeição pelo índice
  const removerAlimentoDaRefeicao = async (idx) => {
    setAlimentosRefeicao(prev => prev.filter((_, i) => i !== idx));
  };

  // ============================================================================================
  // Manipulação das Sugestões de Comida
  // ============================================================================================

  const carregou = useRef(false); // Ref para controlar se já carregou a sugestão para evitar chamadas repetidas

  // useEffect para verificar e sincronizar a sugestão ao carregar o componente, só uma vez
  useEffect(() => {
    if (usuario.userId && !carregou.current) {
      verificarESincronizarSugestao(); // Função para verificar se já existe sugestão no backend ou gerar nova
      carregou.current = true; // Marca que carregou
    }
  }, [usuario.userId]);

  // Função que verifica se existe sugestão no backend e sincroniza localmente
  const verificarESincronizarSugestao = async () => {
    try {
      const response = await api.get('/getSugestaoAlimentacao', {
        params: { usuarioId: usuario.userId }
      });

      // Obtém o nome do dia da semana formatado (Ex: Segunda)
      const nomeDia = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
      const diaFormatado = nomeDia.charAt(0).toUpperCase() + nomeDia.slice(1).replace('-feira', '');

      // Verifica se a resposta tem mensagem de erro ou falta sugestão para o dia, gera nova
      if (response.data.message) {
        await gerarSugestao();
      } else if (!response.data[diaFormatado]) {
        await gerarSugestao();
      } else {
        setSugestaoComida(response.data); // Usa sugestão existente
      }
    } catch (e) {
      console.error('Erro ao buscar sugestao:', e);
    }
  };

  // Função para gerar sugestão de alimentação no backend e atualizar localmente
  const gerarSugestao = async () => {
    // Monta os dados da meta atual para enviar ao backend
    const dadosMeta = {
      agua: metaAguaMl,
      calorias: metaCalorias,
      proteina: metaProteinas,
      carboidrato: metaCarboidratos,
      gordura: metaGorduras,
    };

    // Monta o payload com dados do usuário e metas para gerar sugestão
    const payload = {
      usuarioId: usuario.userId,
      dataNascimento: getPerfil.dataNascimento,
      peso: getPerfil.peso,
      altura: getPerfil.altura,
      sexo: getPerfil.sexo,
      objetivo: getPerfil.objetivo,
      nivelAtividade: getPerfil.nivelAtividade,
      dados: dadosMeta,
    };

    // Chama API para gerar sugestão
    await api.post('/sugestaoAlimentacao', payload);

    // Busca a nova sugestão gerada
    const nova = await api.get('/getSugestaoAlimentacao', {
      params: { usuarioId: usuario.userId },
    });

    setSugestaoComida(nova.data); // Atualiza estado com nova sugestão
  };

  // useEffect para disparar a plotagem da sugestão assim que ela estiver disponível
  useEffect(() => {
    if (getSugestaoComida) {
      plotarSugestao();
    }
  }, [getSugestaoComida]);

  // Função para preparar e carregar os dados da sugestão do dia para exibição
  const plotarSugestao = () => {
    try {
      const nomeDia = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });
      const diaFormatado = nomeDia.charAt(0).toUpperCase() + nomeDia.slice(1).replace('-feira', '').trim();

      // Verifica se há sugestão para o dia atual
      if (getSugestaoComida && getSugestaoComida[diaFormatado]) {
        const sugestaoHoje = getSugestaoComida[diaFormatado];
        setPlotarComida({ dia: diaFormatado, dados: sugestaoHoje });
      } else {
        console.warn('Nenhuma sugestão para o dia atual encontrada.');
      }
    } catch (error) {
      console.error('Erro ao plotar sugestão do dia:', error);
    }
  };

    // ============================================================================================
  // NOVO: Função para buscar alimento na Open Food Facts via API local
  // ============================================================================================
  async function buscarAlimento(nome) {
    setBuscandoAlimento(true);    // Sinaliza que a busca está em andamento
    setErroBusca('');             // Limpa mensagens de erro anteriores
    setResultadoAlimento(null);   // Limpa o alimento selecionado anterior
    setListaResultados([]);       // Limpa lista de resultados anterior

    try {
      // Faz requisição GET para API local que consulta Open Food Facts com o termo pesquisado
      const response = await fetch(
        `http://localhost:3000/api/openfoodfacts?search=${encodeURIComponent(nome)}`
      );
      const data = await response.json();

      if (data.products && data.products.length > 0) {
        // Se retornou produtos, guarda os 5 primeiros resultados para exibição
        setListaResultados(data.products.slice(0, 5));
      } else {
        // Caso não tenha retornado produtos, mostra mensagem de nenhum alimento encontrado
        setErroBusca('Nenhum alimento encontrado.');
      }
    } catch (e) {
      // Caso ocorra erro na busca, exibe mensagem de erro genérica
      setErroBusca('Erro ao buscar alimento.');
    }

    setBuscandoAlimento(false); // Finaliza sinalização de busca
  }

  // ============================================================================================
  // Quando o usuário seleciona um alimento da lista de resultados, atualiza o estado com o alimento selecionado
  function selecionarAlimento(alimento) {
    setResultadoAlimento(alimento);
  }

  // ============================================================================================
  // Função utilitária para calcular calorias estimadas a partir dos macronutrientes, caso não haja valor oficial
  function calcularCaloriasEstimadas(nutriments) {
    const proteinas = parseFloat(nutriments?.proteins) || 0;
    const carboidratos = parseFloat(nutriments?.carbohydrates) || 0;
    const gorduras = parseFloat(nutriments?.fat) || 0;

    // Se não tem nenhum macronutriente, retorna null (sem cálculo)
    if (proteinas === 0 && carboidratos === 0 && gorduras === 0) return null;

    // Fórmula: Proteína e carboidrato = 4 kcal/g; Gordura = 9 kcal/g
    return (proteinas * 4 + carboidratos * 4 + gorduras * 9).toFixed(0);
  }

  // ============================================================================================
  // Função para calcular as calorias proporcionais à quantidade selecionada do alimento
  function calcularCaloriasPorQuantidade(alimento, quantidade) {
    const nutr = alimento.nutriments || {};

    // Tenta pegar calorias por 100g/ml
    let kcal = nutr.energy_kcal;

    // Se não há valor oficial, tenta calcular pela estimativa
    if (!kcal) {
      const estimada = calcularCaloriasEstimadas(nutr);
      kcal = estimada ? parseFloat(estimada) : null;
    }

    if (!kcal) return null; // Sem valor de calorias, retorna null

    // Retorna calorias proporcionais à quantidade informada
    // Fórmula: (calorias por 100g) * (quantidade / 100)
    return ((kcal * quantidade) / 100).toFixed(1);
  }

  // ============================================================================================
  // Calculo das calorias totais da refeição, somando as calorias de cada alimento adicionado
  const totalCaloriasRefeicao = alimentosRefeicao
    .reduce((acc, item) => acc + (parseFloat(item.calorias) || 0), 0)
    .toFixed(1);


  
  return (
    <>
      <div className="d-flex flex-column min-vh-100">

        {/* Navbar fixa no topo da página */}
        <nav
          className="navbar navbar-expand-lg bg-white py-3 px-4 position-fixed w-100 shadow-sm"
          style={{ zIndex: 1000, top: 0, height: '80px' }}
        >
          <div className="container position-relative d-flex justify-content-center align-items-center">

            {/* Logo centralizado */}
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

            {/* Botão de sair posicionado no canto direito */}
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

        {/* Conteúdo principal da página */}
        <main className="container py-4 mt-5 pt-5 flex-grow-1">

          {/* Cabeçalho com saudação e botão para editar perfil */}
          <header className="mb-4 d-flex justify-content-between align-items-center">
            <div>
              <h2>Olá, {nomeUsuario}!</h2>
              <p className="text-muted mb-0">Aqui está o seu resumo de hoje.</p>
            </div>
            <button onClick={irParaPerfilLocal} className="btn outlined">Editar Perfil</button>
          </header>

          {/* Linha principal dividida em 2 colunas */}
          <div className="row g-4">

            {/* Coluna maior: progresso diário e gráficos */}
            <section className="col-md-7">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title mb-4">Progresso de Hoje</h5>

                  {/* Gráficos de anel para calorias e água */}
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

                  {/* Linha horizontal separadora */}
                  <hr />

                  {/* Gráficos de barra horizontal para macros (proteínas, carboidratos e gorduras) */}
                  <div className="mt-3 px-md-3">
                    <div className="row">
                      <div className="col-12">
                        <GraficoBarraHorizontal
                          label="Proteínas"
                          valor={Math.round(consumoProteinas)}
                          meta={Math.round(metaProteinas)}
                          unidade="g"
                          cor="#007bff"
                        />
                      </div>
                      <div className="col-12">
                        <GraficoBarraHorizontal
                          label="Carboidratos"
                          valor={Math.round(consumoCarboidratos)}
                          meta={Math.round(metaCarboidratos)}
                          unidade="g"
                          cor="#ffc107"
                        />
                      </div>
                      <div className="col-12">
                        <GraficoBarraHorizontal
                          label="Gorduras"
                          valor={Math.round(consumoGorduras)}
                          meta={Math.round(metaGorduras)}
                          unidade="g"
                          cor="#28a745"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* Coluna menor: registro rápido e estatísticas semanais */}
            <section className="col-md-5">

              {/* Card com botões para adicionar nova refeição e água */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-3">Registro Rápido</h5>
                  <div className="d-grid gap-2">
                    <button className="btn secondary" onClick={() => setShowRefeicaoModal(true)}>+ Nova Refeição</button>
                    <button onClick={handleShowModal} className="btn btn-info text-white btn-sm">+ Adicionar Água</button>
                  </div>
                </div>
              </div>

              {/* Card com gráfico e dados das calorias consumidas na semana */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title mb-3">Estatísticas da Semana</h5>

                  {/* Barras representando calorias consumidas em cada dia da semana */}
                  <div className="d-flex justify-content-between text-center mb-3">
                    {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((dia, index) => {
                      // Altura proporcional da barra conforme consumo/calorias
                      const maxCal = Math.max(...caloriasPorDiaSemana, 1);
                      const altura = Math.round((caloriasPorDiaSemana[index] / maxCal) * 100);

                      // Obter o dia atual para destacar a barra azul
                      const hoje = new Date();
                      let diaSemanaAtual = hoje.getDay(); // domingo=0, segunda=1, ...
                      let indexDiaAtual = diaSemanaAtual === 0 ? 6 : diaSemanaAtual - 1;

                      // Cor da barra: cinza para futuro, verde/vermelho para passado, azul para hoje
                      let cor = '#e0e0e0';
                      if (index < indexDiaAtual) {
                        cor = caloriasPorDiaSemana[index] >= metaCalorias ? '#28a745' : '#dc3545';
                      } else if (index === indexDiaAtual) {
                        cor = '#007bff';
                      }

                      return (
                        <div
                          className="flex-fill mx-1 rounded d-flex flex-column justify-content-end"
                          style={{ height: '100px' }}
                          key={dia}
                        >
                          <div
                            className="w-100 mb-1 rounded"
                            style={{ height: `${altura}%`, backgroundColor: cor, transition: 'height 0.5s' }}
                          ></div>
                          <small>{index === indexDiaAtual ? <strong>{dia}</strong> : dia}</small>
                          <div className="small text-muted">{Math.round(caloriasPorDiaSemana[index])} kcal</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Linha horizontal separadora */}
                  <hr className="my-3" />

                  {/* IMC e peso */}
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

                  {/* Quadro com última refeição do dia */}
                  <div className="mt-3">
                    <div className="card p-2 mb-2">
                      <strong>Última refeição do dia</strong>
                      {refeicoesDia.length > 0 ? (
                        <div className="mt-2">
                          <div><strong>{refeicoesDiaOrdenadas[refeicoesDiaOrdenadas.length - 1].nome}</strong></div>
                          <div className="text-muted small">{Math.round(refeicoesDiaOrdenadas[refeicoesDiaOrdenadas.length - 1].calorias)} kcal</div>
                        </div>
                      ) : (
                        <div className="text-muted small">Nenhuma refeição registrada hoje.</div>
                      )}
                    </div>

                    {/* Botão para mostrar/ocultar todas as refeições */}
                    {refeicoesDia.length > 1 && (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        className="mb-2"
                        onClick={() => setMostrarTodasRefeicoes(m => !m)}
                      >
                        {mostrarTodasRefeicoes ? 'Ocultar todas as refeições do dia' : 'Ver todas as refeições do dia'}
                      </Button>
                    )}

                    {/* Lista expandida das refeições do dia, visível quando mostrarTodasRefeicoes = true */}
                    <div className={`refeicoes-dropdown ${mostrarTodasRefeicoes ? 'aberto' : ''}`}>
                      <div className="card p-3">
                        <h6 className="mb-3"><strong>Todas as refeições do dia</strong></h6>
                        <ul className="list-group list-group-flush">
                          {refeicoesDiaOrdenadas.map((ref, idx) => (
                            <li key={idx} className="list-group-item px-0 py-2">
                              <div className="d-flex justify-content-between align-items-center">
                                <span>{ref.nome}</span>
                                <span className="fw-bold small">{Math.round(ref.calorias)} kcal</span>
                              </div>
                              {Array.isArray(ref.alimentos) && ref.alimentos.length > 0 && (
                                <ul className="small text-muted ps-3 mt-1 mb-0" style={{ listStyle: 'circle' }}>
                                  {ref.alimentos.map((al, i) => (
                                    <li key={i}>{al.nomeAlimento} ({al.quantidade}g)</li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

          </div>

          {/* ======================================================================================== */}

          {/* Se a sugestão alimentar ainda não foi carregada, mostra loading */}
          {!getPlotarComida?.dados?.cafe || !getPlotarComida?.dados?.almoco || !getPlotarComida?.dados?.janta ? (
            <div className="mt-5 text-center text-muted">
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
              <p className="mt-3">Carregando sugestão alimentar...</p>
            </div>
          ) : (
            <div className="mt-5">
              <h5 className="card-title mb-4">
                Sugestão de refeição de <strong>{getPlotarComida?.dia ?? '---'}</strong>
              </h5>

              <div className="row g-4">

                {/* Card Café da manhã */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 shadow-sm border-primary">
                    <div className="card-body">
                      <h5 className="card-title mb-3 text-primary">☕ Café da manhã</h5>

                      {/* Lista dos alimentos do café */}
                      <ul className="list-group list-group-flush mb-3">
                        {getPlotarComida?.dados?.cafe?.alimentos?.map((alimento, index) => (
                          <li key={index} className="list-group-item border-0 px-0">
                            {alimento.nome} - {alimento.quantidade}
                            {typeof alimento.quantidade === 'number' ? 'g' : ''}
                          </li>
                        ))}
                      </ul>

                      {/* Macronutrientes do café */}
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-top pt-3 mt-2 px-0">
                          Calorias: {getPlotarComida?.dados?.cafe?.calorias ?? '---'} kcal
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Proteínas: {getPlotarComida?.dados?.cafe?.proteinas ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Carboidratos: {getPlotarComida?.dados?.cafe?.carboidratos ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Gorduras: {getPlotarComida?.dados?.cafe?.gorduras ?? '---'} g
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Almoço */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 shadow-sm border-success">
                    <div className="card-body">
                      <h5 className="card-title mb-3 text-success">🍛 Almoço</h5>

                      <ul className="list-group list-group-flush mb-3">
                        {getPlotarComida?.dados?.almoco?.alimentos?.map((alimento, index) => (
                          <li key={index} className="list-group-item border-0 px-0">
                            {alimento.nome} - {alimento.quantidade}
                            {typeof alimento.quantidade === 'number' ? 'g' : ''}
                          </li>
                        ))}
                      </ul>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-top pt-3 mt-2 px-0">
                          Calorias: {getPlotarComida?.dados?.almoco?.calorias ?? '---'} kcal
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Proteínas: {getPlotarComida?.dados?.almoco?.proteinas ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Carboidratos: {getPlotarComida?.dados?.almoco?.carboidratos ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Gorduras: {getPlotarComida?.dados?.almoco?.gorduras ?? '---'} g
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Janta */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 shadow-sm border-warning">
                    <div className="card-body">
                      <h5 className="card-title mb-3 text-warning">🌙 Janta</h5>

                      <ul className="list-group list-group-flush mb-3">
                        {getPlotarComida?.dados?.janta?.alimentos?.map((alimento, index) => (
                          <li key={index} className="list-group-item border-0 px-0">
                            {alimento.nome} - {alimento.quantidade}
                            {typeof alimento.quantidade === 'number' ? 'g' : ''}
                          </li>
                        ))}
                      </ul>

                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-top pt-3 mt-2 px-0">
                          Calorias: {getPlotarComida?.dados?.janta?.calorias ?? '---'} kcal
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Proteínas: {getPlotarComida?.dados?.janta?.proteinas ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Carboidratos: {getPlotarComida?.dados?.janta?.carboidratos ?? '---'} g
                        </li>
                        <li className="list-group-item border-0 px-0">
                          Gorduras: {getPlotarComida?.dados?.janta?.gorduras ?? '---'} g
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>

        {/* Rodapé fixo na base da página */}
        <footer className="bg-white border-top text-center py-3 mt-auto">
          <div className="small">
            <p className="mb-1">© 2025 <strong>NutriTracker</strong>. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>

      
      {/* MODAL NOVA CONSUMO DE AGUA */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        {/* Cabeçalho do modal com botão de fechar */}
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Água</Modal.Title>
        </Modal.Header>

        {/* Corpo do modal */}
        <Modal.Body>
          <p>Digite a quantidade de água que você bebeu:</p>

          {/* Input numérico para inserir quantidade de água em ml */}
          <input
            type="number"
            className="form-control"
            value={aguaInputMl} // valor controlado pelo estado aguaInputMl
            onChange={e => setAguaRecebe(parseInt(e.target.value))} // atualiza estado ao digitar
            placeholder="Ex: 250"
          />

          <small className="text-muted">Valor em ml</small>
        </Modal.Body>

        {/* Rodapé com botões Cancelar e Salvar */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancelar</Button>
          <Button variant="primary" onClick={handleSalvarAgua}>Salvar</Button>
        </Modal.Footer>
      </Modal>

      {/* MODAL NOVA REFEIÇÃO */}
      <Modal show={showRefeicaoModal} onHide={() => setShowRefeicaoModal(false)} centered>
        {/* Cabeçalho com botão de fechar */}
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Refeição</Modal.Title>
        </Modal.Header>

        {/* Corpo do modal */}
        <Modal.Body>
          {/* Campo para nome da refeição */}
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

          {/* Campo para buscar alimentos */}
          <label htmlFor="alimentoBusca" className="form-label">Digite o nome do alimento:</label>
          <input
            id="alimentoBusca"
            type="text"
            className="form-control mb-2"
            value={alimentoBusca}
            onChange={e => setAlimentoBusca(e.target.value)}
            placeholder="Ex: banana, arroz, pão..."
          />

          {/* Botão buscar alimento */}
          <Button
            variant="success"
            className="mb-2"
            onClick={() => buscarAlimento(alimentoBusca)}
            disabled={buscandoAlimento || !alimentoBusca.trim()}
          >
            {buscandoAlimento ? 'Buscando...' : 'Buscar'}
          </Button>

          {/* Mostra erro se a busca falhar */}
          {erroBusca && <div className="text-danger small mb-2">{erroBusca}</div>}

          {/* Lista de resultados da busca, permite selecionar um alimento */}
          {listaResultados.length > 0 && !resultadoAlimento && (
            <div className="list-group mb-2">
              <div className="mb-1 small">Selecione o alimento correto:</div>
              {listaResultados.map((item, idx) => (
                <button
                  key={item.code || idx}
                  className="list-group-item list-group-item-action d-flex align-items-center"
                  onClick={() => selecionarAlimento(item)}
                >
                  {/* Miniatura da imagem do alimento */}
                  {item.image_thumb_url && (
                    <img
                      src={item.image_thumb_url}
                      alt="thumb"
                      style={{ width: 32, height: 32, objectFit: 'cover', marginRight: 8, borderRadius: 4 }}
                    />
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
                  Calorias:{' '}
                  {resultadoAlimento.nutriments?.energy_kcal
                    ? `${resultadoAlimento.nutriments.energy_kcal} kcal`
                    : calcularCaloriasEstimadas(resultadoAlimento.nutriments)
                    ? `${calcularCaloriasEstimadas(resultadoAlimento.nutriments)} kcal (estimado)`
                    : 'N/A'}{' '}
                  por 100g/ml
                </li>
                <li>Proteínas: {resultadoAlimento.nutriments?.proteins || 'N/A'} g</li>
                <li>Carboidratos: {resultadoAlimento.nutriments?.carbohydrates || 'N/A'} g</li>
                <li>Gorduras: {resultadoAlimento.nutriments?.fat || 'N/A'} g</li>
              </ul>

              {/* Input para quantidade consumida do alimento */}
              <div className="mt-2">
                <label className="form-label">Quantidade consumida (g/ml):</label>
                <input
                  type="number"
                  min="1"
                  className="form-control mb-2"
                  value={quantidadeSelecionada}
                  onChange={e => setQuantidadeSelecionada(Number(e.target.value))}
                />
                <div className="mb-2 small text-muted">
                  Valores nutricionais são geralmente por 100g/ml. Informe a quantidade consumida para calcular o valor proporcional.
                </div>

                {/* Botões para adicionar alimento à refeição e para buscar outro */}
                <Button variant="primary" onClick={adicionarAlimentoNaRefeicao}>
                  Adicionar alimento à refeição
                </Button>
                <Button variant="outline-primary" size="sm" className="ms-2" onClick={() => setResultadoAlimento(null)}>
                  Buscar outro alimento
                </Button>
              </div>
            </div>
          )}

          {/* Lista dos alimentos já adicionados à refeição */}
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

              {/* Total de calorias da refeição */}
              <div className="fw-bold">Total de calorias da refeição: {totalCaloriasRefeicao} kcal</div>

              {/* Botão para salvar a refeição (habilitado apenas se nome válido) */}
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

        {/* Rodapé com botão fechar */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowRefeicaoModal(false)}>Fechar</Button>
        </Modal.Footer>
    </Modal>
      
    </>
  )
}

export default Conteudo
