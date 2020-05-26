const func = require('./func')

describe('teste de índice', () => {
    const v = [1, 2, 3, 4];

    //Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
    test('retorno do índice do item de referência', () => {
        expect(func.myIndexOf(v, 3)).toBe(2);
    });

    //Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
    test('retorno de índice não incluso no array', () => {
        expect(func.myIndexOf(v, 5)).toBe(-1);
    });

});