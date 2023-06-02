// 1. перепишите функцию через рекурсию
function printArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], 'array');
    }
}

printArrayValues([1, 2, 3, ]);



const arr = [1, 2, 3]

function printArrayValues(arr, index = 0) {
    console.log(arr[index], 'arry');
    if (index < arr.length) {
        printArrayValues(arr, ++index)
    }
}
printArrayValues(arr)






// задание 2.

// const str = 'My name 457 is Alex';
// const regex = /\D/gmi;
// const result = str.match(regex);
// console.log(result);


// задание 3.


// const str = 'Hello\tWorld\nTest';
// const regex = /\s/gmi;
// const result = str.match(regex);
// console.log(result);






//Доп дз

let symb = "o",
    str = "loremipsumdolor";

function countChar(str, symb) {
    let counter = 0;

    for (let char of str) {
        if (char === symb) {
            counter++;
        }
    }
    return counter;
}
console.log(countChar(str, symb));