// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

// *** INCOMPLETA ***

function biggestOne (listNames){
    let newList = [];
    
    for (let i in listNames) {
        newList[i] = Array.from(listNames[i]);

        let biggest = newList[0];
        for (let j in newList){
            if (newList[j].length < biggest){
                biggest = newList[j];
                console.log(newList[j]);
            }
        }
        //console.log(newList[i].length);
    }

    return 0;

    // let maxName = newList[0];
    // for (let j in newList){
    //     if (maxName.length < newList[j].lenght){
    //         maxName = newList[j];
    //         console.log(maxName);
    //     }
    // }

    //return (maxName);
}

console.log(biggestOne(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));