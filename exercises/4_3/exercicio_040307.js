function maxValue (chain){
    let max=chain[0];
    let position = 0;
    for (let item in chain){
        if (max<chain[item]){
            max = chain[item];
            position = item;
        }
    }
    return(position);  
}

console.log(maxValue([2, 3, 6, 7, 10, 1]));