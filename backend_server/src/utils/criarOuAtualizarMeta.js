// Importe SOMENTE a nova função
import { gerarPlanoNutricionalCompleto } from './calculoSaude.js';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

// A função agora só precisa do ID e do perfil completo
export async function criarOuAtualizarMeta(userId, perfilCompleto) {
  // A nova função faz todo o trabalho pesado
  
  const plano = gerarPlanoNutricionalCompleto(perfilCompleto);

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