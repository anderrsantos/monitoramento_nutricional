import '../../index.css'
import './style.css'
import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function EditPerfil({ usuario, voltar }) {
  const voltarLocal = () => {
    voltar(usuario)
  }

  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    peso: '',
    altura: '',
    objetivo: '',
    nivelAtividade: ''
  })



  useEffect(() => {
    const carregarPerfil = async () => {
      try {

        console.log(usuario)
        const response = await api.get('/getPerfil', {
          params: { userId: usuario.userId }
        })

        const perfil = response.data.perfil

        setFormData({
          nome: perfil.nome?.split(' ')[0] || '',
          sobrenome: perfil.sobrenome?.split(' ').slice(1).join(' ') || '',
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitEditar = async (e) => {
    e.preventDefault()

    const dadosParaEnviar = {
      userId: usuario.userId,
      nome: `${formData.nome} `,
      sobrenome: formData.sobrenome, 
      peso: parseFloat(formData.peso),
      altura: parseFloat(formData.altura),
      objetivo: formData.objetivo,
      nivelAtividade: formData.nivelAtividade
    }

    try {
      await api.put('/updatePerfil', dadosParaEnviar)
      alert('Perfil atualizado com sucesso!')
      //voltar()
    } catch (err) {
      console.error('Erro ao atualizar perfil:', err)
      alert('Erro ao atualizar o perfil.')
    }
  }

  return (
    <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
      <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
        <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltarLocal} />

        <h4 className="text-center fw-semibold mb-4 mt-2">
          Edite seus <span className="text-success">dados</span> pessoais
        </h4>

        <form>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input type="text" id="nome" name="nome" className="form-control" value={formData.nome} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
            <input type="text" id="sobrenome" name="sobrenome" className="form-control" value={formData.sobrenome} onChange={handleChange} required />
          </div>

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

          <div className="mb-4">
            <label htmlFor="objetivo" className="form-label">Objetivo</label>
            <select id="objetivo" name="objetivo" className="form-select" value={formData.objetivo} onChange={handleChange} required>
              <option disabled value="">Selecione</option>
              <option value="perder_gordura">Perder gordura</option>
              <option value="manter_peso">Manter o peso</option>
              <option value="ganhar_massa">Ganhar massa muscular</option>
            </select>
          </div>

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

          <div className="d-grid">
            <button type="submit" className="btn btn-success" onClick={handleSubmitEditar}>Salvar alterações</button>
          </div>
          <div className="d-grid">
             <button type="button" className="btn btn-danger" onClick={() => alert('Funcionalidade de deletar conta ainda não implementada.')}>Deletar Conta</button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default EditPerfil
