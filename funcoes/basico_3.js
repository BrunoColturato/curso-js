// Arrow function

const somar1 = numeros => {
    let total = 0;
    let n;

    for(n of numeros) {
        total += n;
    }

    return total;
}

console.log( somar1( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) );

/** 
 * Parâmetros rest.
 * Permite representar em um vetor um número indefinido de parâmetros.
*/

const somar2 = (...numeros) => {
    // numeros virou um array
    let total = 0;
    let n;

    for(n of numeros) {
        total += n;
    }

    return total;
}

console.log( somar2( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ) );
