const func = require('./func');

// implemente seus testes aqui
describe('remove itens do array', () => {
    const v = [1, 2, 3, 4];
    //Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    test('remove indice 3', () => {
        expect(func.myRemove(v, 3)).toEqual([1, 2, 4]);
    });

    //Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    test('testa se não remove o indice 3', () => {
        expect(func.myRemove(v, 3)).not.toEqual(v);
    });

    // Verifique se o array passado por parâmetro não sofreu alterações
    test('testa se o array não foi modificado', () => {
        const y = [1, 2, 3, 4];
        func.myRemove(y, 2);
        expect(y).toEqual([1, 2, 3, 4]);
    })
    //Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    test('remove array não incluso', () => {
        expect(func.myRemove(v, 5)).toEqual(v);
    });

})


