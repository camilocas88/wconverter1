"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kgToPounds = kgToPounds;
exports.poundsToKg = poundsToKg;
function kgToPounds() {
  for (var _len = arguments.length, kilograms = Array(_len), _key = 0; _key < _len; _key++) {
    kilograms[_key] = arguments[_key];
  }

  var resultado = kilograms.map(function (kg) {
    return kg * 2.20462;
  });
  if (resultado.length == 1) resultado = resultado[0];

  return resultado;
}

function poundsToKg() {
  for (var _len2 = arguments.length, pounds = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    pounds[_key2] = arguments[_key2];
  }

  var resultado = pounds.map(function (p) {
    return p * 0.453592;
  });
  if (resultado.length == 1) resultado = resultado[0];

  return resultado;
}