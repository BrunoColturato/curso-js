// Function declaration
function somar(a, b) {
    return a + b;
}

console.log( "somar(3, 7): " + somar(3, 7) );
console.log( "somar(6, 9, 2, 1, 0): " + somar(6, 9, 2, 1, 0) );
console.log( "somar(1): " + somar(1) );
console.log( "somar(): " + somar() );

// Function expression
const multiplicar = function(a, b) {
    return a * b;
}

console.log( "multiplicar(2, 10): " + multiplicar(2, 10) );