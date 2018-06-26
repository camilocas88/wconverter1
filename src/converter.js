export function kgToPounds (...kilograms)
{
  let resultado = kilograms.map(kg => kg * 2.20462)
  if(resultado.length == 1) resultado = resultado[0]

  return resultado
}

export function poundsToKg (...pounds)
{
  let resultado = pounds.map(p => p * 0.453592)
  if(resultado.length == 1) resultado = resultado[0]

  return resultado
}
