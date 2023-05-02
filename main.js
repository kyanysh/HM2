// Triangle

var triangle = "#";

do {
    console.log(triangle);
    triangle += "#";
} while (triangle.length <= 7);

// Triangle

// FizzBuzz

for (var i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
        console.log(i, "FizzBuzz");
    } else if (!(i % 3)) {
        console.log(i, "Fizz");
    } else if (!(i % 5)) {
        console.log(i, "Buzz");
    }
}

// FizzBuzz

// шахматная доска

var deskSize = 8,
    totalSize = deskSize * deskSize,
    line = "",
    flag = true;


function createLine(deskSize, flag) {
    var result = "";
    for (var i = 0; i < deskSize; i++) {
        (i % 2) ? result += "#": result += " ";
    }
    if (flag) {
        result = reverseString(result);
    }
    return result;
}

function reverseString(str) {
    var result = "";
    for (var i = str.length - 1; i > 0; i--) {
        result += str[i];
    }
    return result;
}


for (var i = 1; i <= deskSize; i++) {
    if (flag) {
        flag = false;
    } else {
        flag = true;
    }
    console.log(createLine(deskSize, flag));
}

//шахматная доска