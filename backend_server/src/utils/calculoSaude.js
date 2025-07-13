/** IMC = peso (kg) / (altura (m))^2 */
export function calcularIMC(peso, alturaCm) {
    const h = alturaCm / 100;
    return peso / (h * h);
  }
  
  /** Harris-Benedict */
  export function calcularTMB(peso, alturaCm, idade, sexo) {
    if (sexo === 'Masculino') {
      return 88.362 + (13.397 * peso) + (4.799 * alturaCm) - (5.677 * idade);
    } else {
      return 447.593 + (9.247 * peso) + (3.098 * alturaCm) - (4.330 * idade);
    }
  }
  
  /** 30 ml por kg de peso corporal */
  export function calcularConsumoAgua(peso) {
    return peso * 30;
  }
  