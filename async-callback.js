function multiply (a, b) {
    return a * b;
}

function square(n){
    return multiply(n, n);
}

function printSquare(num){
    var result = square(num);
    console.log(result);
}

printSquare(5);

