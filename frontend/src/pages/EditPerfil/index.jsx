import '../../index.css'
import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function EditPerfil({ usuario, voltar }) {
  // Função para voltar para a tela anterior, passando o usuário atual
  const voltarLocal = () => {
    voltar(usuario)
  }

  // Estado para armazenar os dados do formulário de edição
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    peso: '',
    altura: '',
    objetivo: '',
    nivelAtividade: ''
  })

  // Estados para controlar a exibição dos modais de exclusão e confirmação
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)

  // useEffect que carrega os dados do perfil ao montar o componente e sempre que 'usuario' mudar
  useEffect(() => {
    const carregarPerfil = async () => {
      try {
        // Faz requisição GET para buscar dados do perfil no backend
        const response = await api.get('/getPerfil', {
          params: { userId: usuario.userId }
        })

        const perfil = response.data.perfil

        // Atualiza o estado com os dados recebidos (ou string vazia se não existir)
        setFormData({
          nome: perfil.nome || '',
          sobrenome: perfil.sobrenome || '',
          peso: perfil.peso || '',
          altura: perfil.altura ? perfil.altura : '',
          objetivo: perfil.objetivo || '',
          nivelAtividade: perfil.nivelAtividade || ''
        })
      } catch (err) {
        console.error('Erro ao carregar perfil:', err)
        alert('Erro ao carregar os dados do perfil.')
      }
    }

    carregarPerfil()
  }, [usuario])

  // Manipula alterações em qualquer campo do formulário
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Função para enviar os dados atualizados ao backend para salvar
  const handleSubmitEditar = async (e) => {
    e.preventDefault()

    // Monta objeto com dados para enviar (convertendo peso e altura para número)
    const dadosParaEnviar = {
      userId: usuario.userId,
      nome: `${formData.nome} `, // tem um espaço extra no final? talvez desnecessário
      sobrenome: formData.sobrenome,
      peso: parseFloat(formData.peso),
      altura: parseFloat(formData.altura),
      objetivo: formData.objetivo,
      nivelAtividade: formData.nivelAtividade
    }

    try {
      // Atualiza perfil no backend via PUT
      const response = await api.put('/updatePerfil', dadosParaEnviar)

      // Busca metas atualizadas (talvez para atualizar sugestões depois)
      const responseMeta = await api.get('/getMetas', {
          params: { userId: usuario.userId }
        });

      // Manipula botão para indicar que está alterando
      const btn = document.getElementById('confirmarUpdate');
      btn.textContent = "Alterando...";
      btn.disabled = true;
      document.getElementById('cancelarUpdate').disabled = true

      // Faz uma chamada para criar sugestões alimentares com base no perfil e metas atualizadas
      await api.post('/sugestaoAlimentacao',{
         usuarioId: usuario.userId,
         dataNascimento: response.data.perfil.dataNascimento,
         peso: response.data.perfil.peso,
         altura: response.data.perfil.altura,
         sexo: response.data.perfil.sexo,
         objetivo: response.data.perfil.objetivo,
         nivelAtividade: response.data.perfil.nivelAtividade,
         dados: responseMeta.data.meta
      })

      // Fecha modal de confirmação e volta para a tela anterior
      setShowConfirmModal(false)
      voltarLocal()
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err)
      alert('Erro ao atualizar o perfil.')
    }
  }

  // Função para deletar a conta do usuário
  const handleSubmitDeletar = async () => {
    try {
      await api.delete('/deleteUser', {
        data: { userId: usuario.userId }
      })
      alert('Conta deletada com sucesso.')
      setShowDeleteModal(false)
      window.location.href = '/' // redireciona para home ou login
    } catch (err) {
      console.error('Erro ao deletar conta:', err)
      alert('Erro ao deletar a conta. Tente novamente.')
    }
  }

  return (
    <>
      {/* Navbar fixa no topo */}
      <nav className="navbar navbar-expand-lg bg-white px-4 py-2 position-fixed w-100 shadow-sm start-0 top-0" style={{ zIndex: 1000 }}>
        <div className="container-fluid justify-content-between">
          {/* Logo que volta para a tela anterior */}
          <a className="navbar-brand mx-auto d-flex align-items-center" href="#" onClick={voltarLocal} id="logo">
            <img src={logo} alt="Logo" style={{ height: '40px' }} />
            <span className="ms-2 fw-bold text-success d-none d-lg-inline">
              NUTRI<span className="text-danger">TRACKER</span>
            </span>
          </a>
        </div>
      </nav>

      {/* Área principal do formulário */}
      <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
        <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
          {/* Botão fechar que volta para a tela anterior */}
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltarLocal} />

          <h4 className="text-center fw-semibold mb-4 mt-2">
            Edite seus <span className="text-success">dados</span> pessoais
          </h4>

          {/* Formulário de edição */}
          <form>
            {/* Nome */}
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" id="nome" name="nome" className="form-control" value={formData.nome} onChange={handleChange} required />
            </div>

            {/* Sobrenome */}
            <div className="mb-3">
              <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
              <input type="text" id="sobrenome" name="sobrenome" className="form-control" value={formData.sobrenome} onChange={handleChange} required />
            </div>

            {/* Peso e Altura lado a lado */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="peso" className="form-label">Peso (kg)</label>
                <input type="number" step="0.1" id="peso" name="peso" className="form-control" value={formData.peso} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="altura" className="form-label">Altura (cm)</label>
                <input type="number" step="0.1" id="altura" name="altura" className="form-control" value={formData.altura} onChange={handleChange} required />
              </div>
            </div>

            {/* Seleção de objetivo */}
            <div className="mb-4">
              <label htmlFor="objetivo" className="form-label">Objetivo</label>
              <select id="objetivo" name="objetivo" className="form-select" value={formData.objetivo} onChange={handleChange} required>
                <option disabled value="">Selecione</option>
                <option value="perder_gordura">Perder gordura</option>
                <option value="manter_peso">Manter o peso</option>
                <option value="ganhar_massa">Ganhar massa muscular</option>
              </select>
            </div>

            {/* Seleção do nível de atividade física */}
            <div className="mb-4">
              <label htmlFor="nivelAtividade" className="form-label">Nível de atividade física</label>
              <select id="nivelAtividade" name="nivelAtividade" className="form-select" value={formData.nivelAtividade} onChange={handleChange} required>
                <option disabled value="">Selecione</option>
                <option value="sedentario">Sedentário</option>
                <option value="levemente_ativo">Levemente ativo</option>
                <option value="moderadamente_ativo">Moderadamente ativo</option>
                <option value="muito_ativo">Bastante ativo</option>
              </select>
            </div>

            {/* Botões para salvar ou deletar conta */}
            <div className="d-flex flex-column gap-2 px-3">
              <button type="button" className="btn btn-success" onClick={() => setShowConfirmModal(true)}>
                Salvar alterações
              </button>
              <button type="button" className="btn btn-danger" onClick={() => setShowDeleteModal(true)}>
                Deletar Conta
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Modal de confirmação para salvar alterações */}
      {showConfirmModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title text-success">Confirmar alterações</h5>
                <button id="cancelarXUpdate" type="button" className="btn-close" onClick={() => setShowConfirmModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Deseja realmente salvar as alterações do seu perfil?<br /></p>
              </div>
              <div className="modal-footer">
                <button id="cancelarUpdate" className="btn btn-secondary" onClick={() => setShowConfirmModal(false)}>Cancelar</button>
                <button id="confirmarUpdate" className="btn btn-success" onClick={handleSubmitEditar}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmação para deletar conta */}
      {showDeleteModal && (
        <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirmar exclusão</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Tem certeza de que deseja deletar sua conta?<br />
                  Essa ação não poderá ser desfeita.
                </p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancelar</button>
                <button className="btn btn-danger" onClick={handleSubmitDeletar}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditPerfil
