import './style.css'
import '../../index.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import api from '../../services/api.js'

function EditPerfil({ usuario, voltar }) {
  const [formData, setFormData] = useState({
    nome: usuario.nome?.split(' ')[0] || '',
    sobrenome: usuario.nome?.split(' ').slice(1).join(' ') || '',
    peso: usuario.peso || '',
    altura: usuario.altura ? usuario.altura * 100 : '',
    objetivo: usuario.objetivo || '',
    nivelAtividade: usuario.nivelAtividade || ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dadosParaEnviar = {
      nome: `${formData.nome} ${formData.sobrenome}`,
      peso: parseFloat(formData.peso),
      altura: parseFloat(formData.altura) / 100,
      objetivo: formData.objetivo,
      nivelAtividade: formData.nivelAtividade
    }

    api.put(`/perfil`, dadosParaEnviar)
      .then(() => {
        alert('Perfil atualizado com sucesso!')
        voltar()
      })
      .catch(err => {
        console.error('Erro ao atualizar perfil:', err)
        alert('Erro ao atualizar o perfil.')
      })
  }

  return (
    <>
      <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
        <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltar} />

          <h4 className="text-center fw-semibold mb-4 mt-2">
            Edite seus <span className="text-success">dados</span> pessoais
          </h4>

          <form onSubmit={handleSubmit}>
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
              <label htmlFor="objetivo" className="form-label">objetivo</label>
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
              <button type="submit" className="btn btn-success">Salvar alterações</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default EditPerfil
