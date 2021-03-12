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