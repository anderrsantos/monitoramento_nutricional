import '../../index.css'
import React, { useEffect } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js' 

function RegisterDados({ usuario, irParaConteudo, voltar, voltarHome }) {
  // Função para voltar para a tela anterior
  const voltarLocal = () => {
    voltar()
  }

  // Função para voltar para a tela inicial/home
  const voltarHomeLocal = () => {
    voltarHome()
  }

  // Função para registrar o usuário na API, usando o email e senha do objeto usuario
  const registrarUsuario = async () => {
    try {
      await api.post('/register', {
        email: usuario.email,
        password: usuario.password
      });
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar. Por favor, tente novamente mais tarde.');
    }
  };

  // Função para registrar metas associadas ao usuário, recebe o userId retornado ao salvar o perfil
  const registrarMeta = async (userId) => {
    try {
      await api.post('/setMeta', { userId }); 
    } catch (error) {
      console.error('Erro ao registrar metas:', error);
    }
  };

  // Ao montar o componente, registra o usuário (apenas uma vez)
  useEffect(() => {
    registrarUsuario();
  }, []);

  // Função que trata o envio do formulário com dados pessoais
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Coleta dados dos inputs do formulário
    const nome = event.target.nome.value;
    const sobrenome = event.target.sobrenome.value;
    const dataNascimento = event.target.data_nascimento.value;
    const peso = event.target.peso.value;
    const altura = event.target.altura.value;
    const sexo = event.target.sexo.value;
    const objetivo = event.target.objetivo.value;
    const nivelAtividade = event.target.nivel_atividade.value;
    const email = usuario.email;

    try {
      // Envia os dados do perfil para a API
      const response = await api.post('/setPerfil', {
        email,
        nome,
        sobrenome,
        dataNascimento,
        peso,
        altura,
        sexo,
        objetivo,
        nivelAtividade
      });
      
      if (response.status === 200) {
        const userId = response.data.userId;  // Recebe o userId retornado pela API
        await registrarMeta(userId);          // Registra as metas do usuário
        irParaConteudo(response.data);       // Navega para a tela principal com os dados recebidos
      } else {
        alert(response.data?.message || 'Erro inesperado ao registrar perfil.');
      }

    } catch (error) {
      console.error('Erro ao salvar dados:', error);
      alert('Erro ao salvar dados. Por favor, tente novamente.');
    }
  };

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav
        id="nav_bar_cadastro"
        className="navbar navbar-expand-lg bg-white px-4 py-2 position-fixed w-100 shadow-sm start-0 top-0"
        style={{ zIndex: 1000 }}
      >
        <div className="container-fluid justify-content-between">
          {/* Logo */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Conteúdo principal da página */}
      <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
        <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
          {/* Botão fechar - volta para home */}
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltarHomeLocal} />

          {/* Título da seção */}
          <h4 className="text-center fw-semibold mb-4 mt-2">
            Complete seus <span className="text-success">dados</span> pessoais
          </h4>

          {/* Formulário com dados pessoais */}
          <form id="form_dados" onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" id="nome" name="nome" className="form-control" placeholder="Digite seu nome" required />
            </div>

            {/* Sobrenome */}
            <div className="mb-3">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input type="text" id="sobrenome" name="sobrenome" className="form-control" placeholder="Digite seu sobrenome" required />
            </div>

            {/* Data de nascimento */}
            <div className="mb-3">
              <label htmlFor="data_nascimento" className="form-label">Data de Nascimento</label>
              <input type="date" id="data_nascimento" name="data_nascimento" className="form-control" required />
            </div>

            {/* Peso e Altura */}
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

            {/* Sexo */}
            <div className="mb-3">
              <label htmlFor="sexo" className="form-label">Sexo</label>
              <select id="sexo" name="sexo" className="form-select" required>
                <option disabled value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            {/* Objetivo */}
            <div className="mb-4">
              <label htmlFor="objetivo" className="form-label">Qual é a sua objetivo?</label>
              <select id="objetivo" name="objetivo" className="form-select" required>
                <option disabled value="">Selecione</option>
                <option value="perder_gordura">Perder gordura</option>
                <option value="manter_peso">Manter o peso</option>
                <option value="ganhar_massa">Ganhar massa muscular</option>
              </select>
            </div>

            {/* Nível de atividade física */}
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

            {/* Botão salvar */}
            <div className="d-grid">
              <button type="submit" className="btn btn-success">Salvar dados</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default RegisterDados
