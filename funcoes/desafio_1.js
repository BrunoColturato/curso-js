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