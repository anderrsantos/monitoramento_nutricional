
// Objeto com fatores de atividade para cálculo do gasto calórico diário.
export const activityFactors = {
  'sedentario': 1.2,
  'levemente_ativo': 1.375,
  'moderadamente_ativo': 1.55,
  'muito_ativo': 1.725,
};

/**
 * IMC = peso (kg) / (altura (m))^2
 * @param {number} peso - Peso em kg.
 * @param {number} alturaCm - Altura em centímetros.
 * @returns {number} O valor do IMC.
 */
export function calcularIMC(peso, alturaCm) {
  if (alturaCm <= 0) return 0;
  const alturaM = alturaCm / 100;
  return peso / (alturaM * alturaM);
}

/**
 * Calcula a Taxa Metabólica Basal (TMB) usando a fórmula de Harris–Benedict.
 * @param {number} peso - Peso em kg.
 * @param {number} alturaCm - Altura em centímetros.
 * @param {number} idade - Idade em anos.
 * @param {string} sexo - 'Masculino' ou 'Feminino'.
 * @returns {number} O valor da TMB em kcal.
 */
export function calcularTMB(peso, alturaCm, idade, sexo) {
  if (sexo === 'masculino') {
    return 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * idade);
  } else {
    return 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * idade);
  }
}

/**
 * Calcula o consumo de água recomendado, ajustado pelo nível de atividade.
 * @param {number} peso - Peso em kg.
 * @param {string} [nivelAtividade='sedentario'] - Nível de atividade do usuário.
 * @returns {number} A quantidade de água em mL.
 */
export function calcularConsumoAgua(peso, nivelAtividade = 'sedentario') {
  let multiplicador = 35; // Padrão para sedentário (35 mL/kg)
  switch (nivelAtividade) {
    case 'levemente_ativo':
      multiplicador = 40;
      break;
    case 'moderadamente_ativo':
      multiplicador = 45;
      break;
    case 'muito_ativo':
      multiplicador = 50;
      break;
  }
  return peso * multiplicador;
}

/**
 * Converte calorias diárias em gramas de cada macronutriente.
 * @param {number} caloriasDiarias - Total de kcal por dia.
 * @param {number} proteinaFrac - Fração (0–1) de kcal para proteína.
 * @param {number} carboFrac - Fração (0–1) de kcal para carboidrato.
 * @param {number} gorduraFrac - Fração (0–1) de kcal para gordura.
 * @returns {{ proteinaGramas: number, carboidratoGramas: number, gorduraGramas: number }}
 */
export function calcularMacroNutrientes(caloriasDiarias, proteinaFrac, carboFrac, gorduraFrac) {
  const soma = proteinaFrac + carboFrac + gorduraFrac;
  if (Math.abs(soma - 1) > 0.01) {
    // Não lança erro para não quebrar a aplicação, apenas avisa no console.
    console.warn('As frações de macros não somam 1 (100%).');
  }

  const calP = caloriasDiarias * proteinaFrac;
  const calC = caloriasDiarias * carboFrac;
  const calG = caloriasDiarias * gorduraFrac;

  const proteinaGramas = +(calP / 4).toFixed(1);
  const carboidratoGramas = +(calC / 4).toFixed(1);
  const gorduraGramas = +(calG / 9).toFixed(1);

  return { proteinaGramas, carboidratoGramas, gorduraGramas };
}

// --- NOVAS FUNÇÕES PARA CÁLCULO COMPLETO ---

/**
 * Orquestra todos os cálculos para gerar um plano nutricional completo com base na meta.
 * @param {object} dadosUsuario - Objeto com os dados do usuário.
 * @param {number} dadosUsuario.peso - Peso em kg.
 * @param {number} dadosUsuario.altura - Altura em cm.
 * @param {string} dadosUsuario.dataNascimento - Data de nascimento (ex: '1990-01-15').
 * @param {string} dadosUsuario.sexo - 'Masculino' ou 'Feminino'.
 * @param {string} dadosUsuario.nivelAtividade - 'sedentario', 'levemente ativo', etc.
 * @param {string} dadosUsuario.objetivo - 'perder gordura', 'manter peso', 'ganhar massa muscular'.
 * @returns {object} Um objeto com o plano nutricional completo.
 */
export function gerarPlanoNutricionalCompleto(dadosUsuario) {
  const { peso, altura, dataNascimento, sexo, nivelAtividade, objetivo } = dadosUsuario;

  // --- 1. Cálculos Base ---
  const idade = new Date().getFullYear() - new Date(dataNascimento).getFullYear();
  const tmb = calcularTMB(peso, altura, idade, sexo);
  const fatorAtividade = activityFactors[nivelAtividade.toLowerCase()] || activityFactors.sedentario;
  const tdee = tmb * fatorAtividade; // Gasto calórico diário total
  const aguaRecomendada = calcularConsumoAgua(peso, nivelAtividade);

  // --- 2. Ajuste de Calorias e Macros pela Meta ---
  let caloriasDaMeta = tdee;
  let macrosFracoes = { proteina: 0.3, carbo: 0.4, gordura: 0.3 }; // Padrão para manter peso

  switch (objetivo) {
    case 'perder_gordura':
      caloriasDaMeta = tdee - 400; // Déficit de 400 kcal
      macrosFracoes = { proteina: 0.4, carbo: 0.3, gordura: 0.3 }; // Mais proteína
      break;
    case 'ganhar_massa':
      caloriasDaMeta = tdee + 400; // Superávit de 400 kcal
      macrosFracoes = { proteina: 0.3, carbo: 0.45, gordura: 0.25 }; // Mais carboidrato
      break;
  }

  // --- 3. Cálculo final dos macronutrientes em gramas ---
  const macrosEmGramas = calcularMacroNutrientes(
    caloriasDaMeta,
    macrosFracoes.proteina,
    macrosFracoes.carbo,
    macrosFracoes.gordura
  );

  // --- 4. Retorno do plano completo ---
  return {
    calorias: +caloriasDaMeta.toFixed(0),
    proteinas: macrosEmGramas.proteinaGramas,
    carboidratos: macrosEmGramas.carboidratoGramas,
    gorduras: macrosEmGramas.gorduraGramas,
    agua: +aguaRecomendada.toFixed(0),
  };
}
