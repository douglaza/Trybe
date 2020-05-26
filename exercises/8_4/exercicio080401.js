const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:

const addOne = (arr) => {
    // return [32, 58, 13, 6];
    for (let i=0; i<arr.length; i+=1){
        arr[i] += 1;
    }
    // console.log(arr);
    return arr;
}

//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
