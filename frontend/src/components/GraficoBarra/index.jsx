import React from 'react';

/**
 * Componente para exibir um gráfico de barras horizontal que mostra o progresso em relação a uma meta.
 * @param {string} label - O nome da métrica (ex: 'Proteínas').
 * @param {number} valor - O valor atual consumido.
 * @param {number} meta - O valor total da meta.
 * @param {string} unidade - A unidade de medida (ex: 'g').
 * @param {string} cor - A cor da barra de progresso (ex: '#007bff').
 */
function GraficoBarraHorizontal({ label, valor, meta, unidade, cor }) {
  // Calcula o percentual do progresso. Garante que não passe de 100% para a barra.
  // Também previne divisão por zero caso a meta ainda não tenha sido carregada.
  const percentual = meta > 0 ? Math.min((valor / meta) * 100, 100) : 0;

  return (
    <div className="mb-3">
      {/* Rótulos: Nome do Macro e valores (consumido / meta) */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="small fw-bold">{label}</span>
        <span className="small text-muted">
          {Math.round(valor)} / {Math.round(meta)} {unidade}
        </span>
      </div>

      {/* Barra de Progresso do Bootstrap */}
      <div 
        className="progress" 
        style={{ height: '18px', backgroundColor: '#e9ecef' }}
        role="progressbar"
        aria-label={label}
        aria-valuenow={valor}
        aria-valuemin="0"
        aria-valuemax={meta}
      >
        <div
          className="progress-bar"
          style={{ 
            width: `${percentual}%`, 
            backgroundColor: cor 
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default GraficoBarraHorizontal;