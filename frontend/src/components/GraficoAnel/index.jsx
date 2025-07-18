// src/components/GraficoAnel/index.jsx

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

/**
 * Componente de gráfico em anel (tipo "donut") para exibir o progresso de uma meta.
 *
 * @component
 * @param {Object} props
 * @param {number} props.valor - Valor atual do progresso (ex: 750 ml).
 * @param {number} props.meta - Valor da meta total (ex: 2000 ml).
 * @param {string} props.cor - Cor principal do gráfico (ex: "#00bfff").
 * @param {string} props.unidade - Unidade exibida (ex: "ml", "kcal").
 *
 * @returns {JSX.Element} Gráfico de anel com valor atual e meta.
 */
function GraficoAnel({ valor, meta, cor, unidade }) {
  // Calcula o progresso como uma porcentagem (máximo de 100%)
  const progresso = Math.min((valor / meta) * 100, 100);

  // Dados para o gráfico (progresso + restante)
  const data = [
    { name: 'Progresso', value: progresso },
    { name: 'Restante', value: 100 - progresso },
  ];

  // Cor de fundo do anel (parte que ainda falta)
  const corFundo = '#e0e0e0';

  return (
    <div className="position-relative" style={{ width: '200px', height: '200px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="70%"
            outerRadius="100%"
            startAngle={90} // Início no topo
            endAngle={-270} // Sentido anti-horário até completar
            isAnimationActive={true}
          >
            {/* Primeira célula: progresso atual */}
            <Cell fill={cor} stroke={cor} />
            {/* Segunda célula: restante da meta */}
            <Cell fill={corFundo} stroke={corFundo} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Texto central com valor e meta */}
      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <p className="display-6 fw-semibold mb-0" style={{ color: cor }}>{valor}</p>
        <p className="small text-muted">/ {meta} {unidade}</p>
      </div>
    </div>
  );
}

export default GraficoAnel;
