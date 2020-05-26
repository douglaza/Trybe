function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw Error('parameters must be numbers');
    }

    return a + b;
}

function myIndexOf(arr, item) {
    let searchedIndex = -1;
    for (let i = 0; i < arr.length; i += 1) {
        if (item === arr[i]) {
            searchedIndex = i;
        }
    }
    return searchedIndex;
}

function mySum(arr) {
    let result = 0;
    for (let item in arr) {
        result += arr[item];
    }
    return result;
}

function myRemove(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (item !== arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

module.exports = {
    sum,
    myIndexOf,
    mySum,
    myRemove
}