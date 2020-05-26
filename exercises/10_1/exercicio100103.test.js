const func = require('./func');

// implemente seus testes aqui
describe('soma de vetores', () => {
    //Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
    test('soma positivos', () => {
        const v = [1, 2, 3, 4];
        expect(func.mySum(v)).toEqual(10);
    });
    //Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
    test('soma inteiros', () => {
        const v = [1, -2, -3, 4];
        expect(func.mySum(v)).toEqual(0);
    });
});