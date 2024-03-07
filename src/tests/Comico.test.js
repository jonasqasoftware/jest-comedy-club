const Comico = require('../comedians/Comico');

test('Comico - Introdução', () => {
  const comico = new Comico('Zé Cômico');
  expect(comico.introduce()).toBe('Olá, eu sou Zé Cômico!');
});

test('Comico - Performance', () => {
  const comico = new Comico('Zé Cômico');
  expect(comico.perform()).toBe("Rindo alto com piadas engraçadíssimas!");
});
