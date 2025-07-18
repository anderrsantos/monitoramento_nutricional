// Fatores de atividade usados para ajustar o gasto calórico diário
export const activityFactors = {
  'sedentario': 1.2,
  'levemente_ativo': 1.375,
  'moderadamente_ativo': 1.55,
  'muito_ativo': 1.725,
};

// Calcula o IMC com base no peso e altura
export function calcularIMC(peso, alturaCm) {
  if (alturaCm <= 0) return 0;
  const alturaM = alturaCm / 100;
  return peso / (alturaM * alturaM);
}

// Calcula a Taxa Metabólica Basal (TMB) usando a fórmula de Harris-Benedict
export function calcularTMB(peso, alturaCm, idade, sexo) {
  if (sexo === 'masculino') {
    return 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * idade);
  } else {
    return 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * idade);
  }
}

// Calcula o consumo de água recomendado, em mL, com base no peso e atividade
export function calcularConsumoAgua(peso, nivelAtividade = 'sedentario') {
  let multiplicador = 35;
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

// Converte calorias totais em gramas de proteína, carboidrato e gordura
export function calcularMacroNutrientes(caloriasDiarias, proteinaFrac, carboFrac, gorduraFrac) {
  const soma = proteinaFrac + carboFrac + gorduraFrac;
  if (Math.abs(soma - 1) > 0.01) {
    console.warn('As frações de macros não somam 1 (100%).');
  }

  const calP = caloriasDiarias * proteinaFrac;
  const calC = caloriasDiarias * carboFrac;
  const calG = caloriasDiarias * gorduraFrac;

  return {
    proteinaGramas: +(calP / 4).toFixed(1),
    carboidratoGramas: +(calC / 4).toFixed(1),
    gorduraGramas: +(calG / 9).toFixed(1),
  };
}

// Função principal que gera o plano nutricional completo
export function gerarPlanoNutricionalCompleto(dadosUsuario) {
  const { peso, altura, dataNascimento, sexo, nivelAtividade, objetivo } = dadosUsuario;

  // Cálculo de idade, TMB, e gasto total (TDEE)
  const idade = new Date().getFullYear() - new Date(dataNascimento).getFullYear();
  const tmb = calcularTMB(peso, altura, idade, sexo);
  const fatorAtividade = activityFactors[nivelAtividade.toLowerCase()] || activityFactors.sedentario;
  const tdee = tmb * fatorAtividade;
  const aguaRecomendada = calcularConsumoAgua(peso, nivelAtividade);

  // Ajusta calorias e macronutrientes de acordo com o objetivo
  let caloriasDaMeta = tdee;
  let macrosFracoes = { proteina: 0.3, carbo: 0.4, gordura: 0.3 };

  switch (objetivo) {
    case 'perder_gordura':
      caloriasDaMeta = tdee - 400;
      macrosFracoes = { proteina: 0.4, carbo: 0.3, gordura: 0.3 };
      break;
    case 'ganhar_massa':
      caloriasDaMeta = tdee + 400;
      macrosFracoes = { proteina: 0.3, carbo: 0.45, gordura: 0.25 };
      break;
  }

  // Cálculo dos macros em gramas
  const macrosEmGramas = calcularMacroNutrientes(
    caloriasDaMeta,
    macrosFracoes.proteina,
    macrosFracoes.carbo,
    macrosFracoes.gordura
  );

  // Retorna o plano final com calorias, macros e água
  return {
    calorias: +caloriasDaMeta.toFixed(0),
    proteinas: macrosEmGramas.proteinaGramas,
    carboidratos: macrosEmGramas.carboidratoGramas,
    gorduras: macrosEmGramas.gorduraGramas,
    agua: +aguaRecomendada.toFixed(0),
  };
}
