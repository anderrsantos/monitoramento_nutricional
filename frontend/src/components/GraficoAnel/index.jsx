// src/components/GraficoAnel/index.jsx

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Este componente vai receber os dados que ele precisa como "props"
function GraficoAnel({ valor, meta, cor, unidade }) {
    const progresso = Math.min((valor / meta) * 100, 100);

    const data = [
        { name: 'Progresso', value: progresso },
        { name: 'Restante', value: 100 - progresso }
    ];

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
                        startAngle={90} // Começa no topo
                        endAngle={-270}
                        paddingAngle={0}
                        isAnimationActive={true}
                    >
                        <Cell fill={cor} stroke={cor} />
                        <Cell fill={corFundo} stroke={corFundo} />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>

            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <p className={`display-6 fw-semibold mb-0`} style={{ color: cor }}>{valor}</p>
                <p className="small text-muted">/ {meta} {unidade}</p>
            </div>
        </div>
    );
}

export default GraficoAnel;

