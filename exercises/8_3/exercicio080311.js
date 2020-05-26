const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui

// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
assert.deepEqual(isAbove(9,8),true);
assert.deepEqual(isAbove(7,8),false);
