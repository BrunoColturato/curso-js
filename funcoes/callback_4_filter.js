/** FILTER
 * Usado para filtrar dados de um array por meio de uma função callback.
 * O filter retorna um novo array, não modificando o array original.
 * 
 * A callback retorna "true" se o elemento analisado puder fazer parte do
 * novo array e "false", caso contrário. 
*/

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 }, 
    { nome: 'Impressora', qtde: 0, preco: 549.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const getQtdeMaiorQueZero = ( el ) => el.qtde > 0; // Retorna true ou false: FILTER
const getNomeItem = ( el ) => el.nome; // Retorna um "valor" (number, string, ...): MAP

const itensValidos = carrinho.filter( getQtdeMaiorQueZero );
const nomeItensValidos = carrinho.filter( getQtdeMaiorQueZero ).map( getNomeItem );

console.log(itensValidos);
console.log(nomeItensValidos);

/**
 * Criando nosso próprio filter.
 * "fn" deve retornar "true" ou "false".
*/

Array.prototype.myFilter = function( fn ) {
    let i;
    let filtered = [];

    for( i = 0; i < this.length; i++ ) {
        if( fn( this[i], i, this ) ) {
            filtered.push( this[i] );
        }
    }

    return filtered;
}

const itensValidos2 = carrinho.myFilter( getQtdeMaiorQueZero );
const nomeItensValidos2 = carrinho.myFilter( getQtdeMaiorQueZero ).map( getNomeItem );

console.log(itensValidos2);
console.log(nomeItensValidos2);