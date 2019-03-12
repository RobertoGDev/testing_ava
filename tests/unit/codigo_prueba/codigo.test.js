const codigo = require('../../../proyectos/codigo_prueba/codigo');
const sinon = require('sinon');

describe('Testing de codigo.js con operaciones', () => {
  
  test('Resultado de la suma', () => {
    expect(codigo.suma(2, 3)).toBe(5);
  });

  test('Resultado de la resta', () => {
    expect(codigo.resta(4, 3)).toBe(1);
  });

  test('Resultado de la multiplicación', () => {
    expect(codigo.multiplicacion(6, 5)).toBe(30);
  });

})