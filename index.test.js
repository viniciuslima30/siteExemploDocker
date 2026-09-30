// Função simples para testar
function somar(a, b) {
  return a + b;
}

// O bloco de teste do Jest
describe('Testes de Validação da Pipeline', () => {
  
  test('Deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('Ambiente Node.js deve estar ativo', () => {
    expect(process.version).toBeDefined();
  });

});
