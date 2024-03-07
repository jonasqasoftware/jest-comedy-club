const Improvisador = require('../comedians/Improvisador');

test('Improvisador - Introdução', () => {
  const improvisador = new Improvisador('Maria Improv');
  expect(improvisador.introduce()).toBe('Olá, eu sou Maria Improv!');
});

test('Improvisador - Performance', () => {
  const improvisador = new Improvisador('Maria Improv');
  expect(improvisador.perform()).toBe("Lidando com as situações mais inusitadas do público!");
});
