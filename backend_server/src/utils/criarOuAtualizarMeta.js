import { calcularConsumoAgua, calcularIMC, calcularMacroNutrientes, calcularTMB, activityFactors } from './calculoSaude.js';
import { PrismaClient } from '../../generated/prisma/index.js';
const prisma = new PrismaClient();

export async function criarOuAtualizarMeta(userId, perfis, opcoes = {}) {
  const {
    proteinFrac = 0.3,
    carboFrac   = 0.5,
    fatFrac     = 0.2
  } = opcoes;

  const { peso, altura, dataNascimento, sexo, nivelAtividade } = perfis;
  const idade = new Date().getFullYear() - new Date(dataNascimento).getFullYear();
  const dataCriacao = new Date();

  const tmb            = calcularTMB(peso, altura, idade, sexo);
  const fatorAtiv      = activityFactors[nivelAtividade.toLowerCase()] || activityFactors.sedentario;
  const tdee           = tmb * fatorAtiv;
  const agua           = calcularConsumoAgua(peso);
  const macros         = calcularMacroNutrientes(tdee, proteinFrac, carboFrac, fatFrac);

  const meta = await prisma.meta.upsert({
    where: { usuarioId: userId },
    create: {
      usuario:       { connect: { id: userId } },
      calorias:      tdee,
      proteinas:     macros.proteinaGramas,
      carboidratos:  macros.carboidratoGramas,
      gorduras:      macros.gorduraGramas,
      agua:          agua,
      dataCriacao:   dataCriacao
    },
    update: {
      calorias:      tdee,
      proteinas:     macros.proteinaGramas,
      carboidratos:  macros.carboidratoGramas,
      gorduras:      macros.gorduraGramas,
      agua:          agua,
      dataCriacao:   dataCriacao
    }
  });

  return meta;
}
