/** REDUCE
 * Reduz um array de elementos a um valor.
 * 
 * Realiza um processamento em cada elemento e guarda o resultado de
 * cada processamento em um acumulador, que por sua vez é passado para
 * a próxima interação. Assim, o acumulador é atualizado a cada interação.
 * 
 * O acumulador pode adquirir inicialmente um valor determinado ou não.
 * Caso um valor inicial não seja passado, o primeiro elemento do array
 * é passado como valor inicial do acumulador e o processamento começa 
 * pelo segundo elemento. 
*/

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 }, 
    { nome: 'Impressora', qtde: 0, preco: 549.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const getCusto = ( el ) => el.qtde * el.preco;
const somar = ( a, b ) => {
    console.log( a, b );
    return a + b;
}

const custos = carrinho.map( getCusto ); // Gera um vetor com os custos com cada produto
console.log( custos );

const total = custos.reduce( somar, 0 ); // Soma os valores do vetor e retorna o total
console.log( total );

/**
 * Criando meu próprio reduce.
 * fn( total, currentValue, currentIndex, arr )
 */
Array.prototype.myReduce = function( fn, initialValue ) {
    let i;
    let result;

    if( typeof initialValue !== 'undefined' ) {
        result = initialValue;
        i = 0;
    } 
    else {
        result = this[0] ;
        i = 1;
    }

    while(i < this.length) {
        result = fn( result, this[i], i, this );
        i++;
    }

    return result;
}

const total2 = custos.myReduce( (a,b) => a + b );
console.log( total2 );