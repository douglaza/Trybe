function minValue (chain){
    let max=chain[0];
    let position = 0;
    for (let item in chain){
        if (max>chain[item]){
            max = chain[item];
            position = item;
        }
    }
    return(position);  
}

console.log(minValue([2, 4, 6, 7, 10, 0, -3]));