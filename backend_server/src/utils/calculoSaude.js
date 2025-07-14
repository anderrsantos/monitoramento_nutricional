/**
 * Funções para cálculo de indicadores de saúde:
 * - IMC
 * - TMB (Harris–Benedict)
 * - Consumo de água
 * - Distribuição de macronutrientes
 */

/** IMC = peso (kg) / (altura (m))^2 */

export const activityFactors = {
  sedentario: 1.2,
  leve: 1.375,
  moderado: 1.55,
  intenso: 1.725,
  muitoIntenso: 1.9
};



export function calcularIMC(peso, alturaCm) {
  const alturaM = alturaCm / 100;
  return peso / (alturaM * alturaM);
}

/** Harris–Benedict */
export function calcularTMB(peso, alturaCm, idade, sexo) {
  if (sexo === 'Masculino') {
    return 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * idade);
  } else {
    return 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * idade);
  }
}

/** Consumo de água: 35 mL por kg de peso corporal */
export function calcularConsumoAgua(peso) {
  return peso * 35;
}

/**
 * Converte calorias diárias em gramas de cada macronutriente.
 *
 * @param {number} caloriasDiarias — total de kcal por dia
 * @param {number} proteinaFrac     — fração (0–1) de kcal para proteína
 * @param {number} carboFrac        — fração (0–1) de kcal para carboidrato
 * @param {number} gorduraFrac      — fração (0–1) de kcal para gordura
 * @returns {{ proteinaGramas: number, carboidratoGramas: number, gorduraGramas: number }}
 */
export function calcularMacroNutrientes(
  caloriasDiarias,
  proteinaFrac,
  carboFrac,
  gorduraFrac
) {
  const soma = proteinaFrac + carboFrac + gorduraFrac;
  if (Math.abs(soma - 1) > 0.01) {
    throw new Error('As frações de macros devem somar 1 (100%).');
  }

  const calP = caloriasDiarias * proteinaFrac;
  const calC = caloriasDiarias * carboFrac;
  const calF = caloriasDiarias * gorduraFrac;

  const proteinaGramas    = +(calP / 4).toFixed(1);
  const carboidratoGramas = +(calC / 4).toFixed(1);
  const gorduraGramas     = +(calF / 9).toFixed(1);

  return { proteinaGramas, carboidratoGramas, gorduraGramas };
}
