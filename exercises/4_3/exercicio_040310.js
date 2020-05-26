// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.


// *** INCOMPLETA ***


function repeatNum (arrow){
    let count = [0];
    for (let i=0; i<arrow.length; i+=1){
        for (let j=i+1; j<arrow.length; j+=1){
            if (arrow[i] == arrow[j]){
                count[i] +=1;
            }
        } console.log(count);
    }
    return 0;
}

console.log(repeatNum([2, 3, 2, 5, 8, 2, 3]));