import { gerarPlanoNutricionalCompleto } from './calculoSaude.js';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

// Cria ou atualiza a meta nutricional de um usuário no banco de dados
export async function criarOuAtualizarMeta(userId, perfilCompleto) {
  // Gera o plano com base no perfil do usuário
  const plano = gerarPlanoNutricionalCompleto(perfilCompleto);

  // Usa o método `upsert` para criar ou atualizar os dados da meta no banco
  const meta = await prisma.meta.upsert({
    where: { usuarioId: userId },
    create: {
      usuarioId:    userId,
      calorias:     plano.calorias,
      proteinas:    plano.proteinas,
      carboidratos: plano.carboidratos,
      gorduras:     plano.gorduras,
      agua:         plano.agua,
      dataCriacao:  new Date()
    },
    update: {
      calorias:     plano.calorias,
      proteinas:    plano.proteinas,
      carboidratos: plano.carboidratos,
      gorduras:     plano.gorduras,
      agua:         plano.agua,
    }
  });

  return meta;
}
