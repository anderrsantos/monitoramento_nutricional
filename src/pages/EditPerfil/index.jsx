import './style.css'
import '../../index.css'
// 1. IMPORTAMOS OS HOOKS QUE VAMOS USAR
import React, { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'

// Renomeei as props para serem mais claras, mas a lógica é a mesma
function EditPerfil({ voltarParaDashboard }) {
    
    // 2. ESTADO: Criamos um estado para guardar os dados do formulário e o status de carregamento
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        peso: '',
        altura: '',
        meta: '',
        nivel_atividade: ''
    });
    const [isLoading, setIsLoading] = useState(true);

    // 3. BUSCAR DADOS: Usamos useEffect para buscar os dados do usuário assim que a página carrega
    useEffect(() => {
        const idDoUsuarioParaTeste = 1; // Para teste. No futuro, isso viria do login.

        // O backend do seu amigo precisa criar este endpoint: GET /usuarios/{id}
        fetch(`http://localhost:8080/usuarios/${idDoUsuarioParaTeste}`)
            .then(res => {
                if (!res.ok) throw new Error('Falha ao carregar dados do perfil');
                return res.json();
            })
            .then(dadosDoBackend => {
                // Preenchemos o estado com os dados que vieram do backend
                setFormData({
                    nome: dadosDoBackend.nome.split(' ')[0] || '',
                    sobrenome: dadosDoBackend.nome.split(' ').slice(1).join(' ') || '',
                    peso: dadosDoBackend.peso || '',
                    altura: dadosDoBackend.altura ? dadosDoBackend.altura * 100 : '', // Convertendo de metros (do BD) para cm (do form)
                    meta: dadosDoBackend.meta || '',
                    nivel_atividade: dadosDoBackend.nivelAtividade || ''
                });
                setIsLoading(false); // Esconde a mensagem de "Carregando..."
            })
            .catch(error => {
                console.error("Erro ao buscar perfil:", error);
                setIsLoading(false);
                alert("Erro ao carregar os dados do perfil.");
            });
    }, []); // O array vazio [] garante que isso rode apenas uma vez

    // 4. ATUALIZAR DADOS: Função que atualiza o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // 5. SALVAR DADOS: Função que é chamada ao enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        const idDoUsuarioParaTeste = 1;

        const dadosParaEnviar = {
            // Juntamos nome e sobrenome novamente
            nome: `${formData.nome} ${formData.sobrenome}`,
            peso: parseFloat(formData.peso),
            altura: parseFloat(formData.altura) / 100, // Convertendo de volta para metros
            meta: formData.meta,
            nivelAtividade: formData.nivel_atividade
        };

        // O backend do seu amigo precisa criar este endpoint: PUT /usuarios/{id}
        fetch(`http://localhost:8080/usuarios/${idDoUsuarioParaTeste}`, {
            method: 'PUT', // PUT é o método para ATUALIZAR um recurso existente
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosParaEnviar)
        })
        .then(response => {
            if (!response.ok) throw new Error('Falha ao salvar as alterações');
            alert('Perfil atualizado com sucesso!');
            voltarParaDashboard(); // Volta para o dashboard após salvar
        })
        .catch(err => {
            alert('Erro ao atualizar o perfil.');
            console.error(err);
        });
    };
    
    // Mostra uma mensagem de "Carregando..." enquanto os dados não chegam
    if (isLoading) {
        return <div className="text-center mt-5 pt-5">Carregando seus dados...</div>
    }

    return (
        <>
            {/* ... Sua Navbar ... (use voltarParaDashboard no onClick do logo/botão de voltar) */}
            
            <main className="d-flex align-items-center justify-content-center min-vh-100 pt-5">
                <div className="card shadow p-4 bg-white w-100 position-relative" style={{ maxWidth: '600px' }}>
                    
                    <button type="button" className="btn-close position-absolute top-0 end-0 m-3" onClick={voltarParaDashboard} />

                    <h4 className="text-center fw-semibold mb-4 mt-2">
                        Edite seus <span className="text-success">dados</span> pessoais
                    </h4>
                    
                    {/* 6. FORMULÁRIO CONECTADO */}
                    <form onSubmit={handleSubmit}>
                        {/* Cada input agora é "controlado" pelo React com 'value' e 'onChange' */}
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
                            <label htmlFor="meta" className="form-label">Meta</label>
                            <select id="meta" name="meta" className="form-select" value={formData.meta} onChange={handleChange} required>
                                <option disabled value="">Selecione</option>
                                <option value="perder_gordura">Perder gordura</option>
                                <option value="manter_peso">Manter o peso</option>
                                <option value="ganhar_massa">Ganhar massa muscular</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nivel_atividade" className="form-label">Nível de atividade física</label>
                            <select id="nivel_atividade" name="nivel_atividade" className="form-select" value={formData.nivel_atividade} onChange={handleChange} required>
                                <option disabled value="">Selecione</option>
                                <option value="sedentario">Sedentário</option>
                                <option value="levemente_ativo">Levemente ativo</option>
                                <option value="moderadamente_ativo">Moderadamente ativo</option>
                                <option value="muito_ativo">Bastante ativo</option>
                            </select>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-success">
                                Salvar alterações
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default EditPerfil;