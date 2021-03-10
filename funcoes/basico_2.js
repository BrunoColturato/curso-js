// Passar função como parâmetro para outra função

function bomDia() {
    console.log("Bom dia, Eng Comp!");
}

function doIt(fn) {
    if( typeof(fn) === 'function' )
        fn();
    else {
        console.log("fn não é uma função!");
    }
}

doIt( bomDia );
doIt( 'bomDia' );

console.log("# --------------------");

// Retornar uma função a partir de outra função
function estranho(base) {
    return (
        function(exp) {
            return base ** exp; // Como que o JS armazena o valor de 'base' ??
        }
    );
}

const base2 = estranho(2);
console.log( base2(5) );
console.log( estranho(3)(0) );

console.log("# --------------------");

// Desafios

// 1)
function somar(n1) {
    return(
        function(n2) {
            return(
                function(n3) {
                    return n1 + n2 + n3;
                }
            );
        }
    );
}

console.log( somar(1)(1)(2) );

// 2)
function mult(a, b) { return a * b };
function sub(a, b) { return a - b };

function calcular(a, b) {
    return(
        function(fn) {
            return fn(a, b);
        }
    );
}

const doTo5and6 = calcular(5, 6);
console.log( doTo5and6( mult ) );
console.log( doTo5and6( sub ) );