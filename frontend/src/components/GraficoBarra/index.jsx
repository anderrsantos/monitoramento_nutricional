import React from 'react';

/**
 * Componente para exibir um gráfico de barras horizontal que mostra o progresso em relação a uma meta.
 *
 * @component
 * @param {Object} props
 * @param {string} props.label - O nome da métrica (ex: 'Proteínas').
 * @param {number} props.valor - O valor atual consumido.
 * @param {number} props.meta - O valor total da meta.
 * @param {string} props.unidade - A unidade de medida (ex: 'g').
 * @param {string} props.cor - A cor da barra de progresso (ex: '#007bff').
 *
 * @returns {JSX.Element} Um componente de barra de progresso com rótulo e valor atual.
 */
function GraficoBarraHorizontal({ label, valor, meta, unidade, cor }) {
  // Calcula o percentual de preenchimento da barra.
  // Garante que a porcentagem não ultrapasse 100% e evita divisão por zero.
  const percentual = meta > 0 ? Math.min((valor / meta) * 100, 100) : 0;

  return (
    <div className="mb-3">
      {/* Cabeçalho com o nome da métrica e os valores exibidos */}
      <div className="d-flex justify-content-between align-items-center mb-1">
        <span className="small fw-bold">{label}</span>
        <span className="small text-muted">
          {Math.round(valor)} / {Math.round(meta)} {unidade}
        </span>
      </div>

      {/* Barra de progresso (usa classes do Bootstrap) */}
      <div 
        className="progress" 
        style={{ height: '18px', backgroundColor: '#e9ecef' }}
        role="progressbar"
        aria-label={label}
        aria-valuenow={valor}
        aria-valuemin="0"
        aria-valuemax={meta}
      >
        {/* Parte colorida da barra representando o progresso */}
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
