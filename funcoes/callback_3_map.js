/** MAP
 * Usado para mapear um array e submeter seus elementos a uma função
 * callback gerando, ao final do precesso, um novo array. 
 */

let arrayOriginal = [ 1, 2, 3, 4, 5, 6 ];

/** 
 * Uma função callback passada para um map espera receber 3 parâmetro:
 * 
 * 1) O elemento do array;
 * 2) O indice associado ao elemento analisado em questão;
 * 3) O próprio array cuja função map está sendo executada.
 * 
 * IMPORTANTE: a função de callback deve retornar, obrigatoriamente, o
 * novo elemento a ser adicionado ao array resultante do mapeamento.
 * 
 * const callback = ( elemento, indice, array );
*/ 

const dobro = (el) => el * 2;

function dobroIndiceImpar( el, i ) {
    if( i % 2 === 0) {
        return el;
    }
    else {
        return el * 2;
    }
}

const arrayMapeado1 = arrayOriginal.map(dobro);
const arrayMapeado2 = arrayOriginal.map(dobroIndiceImpar);

console.log(arrayOriginal, arrayMapeado1, arrayMapeado2);

//============== Mini desafio ===============

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 }, 
    { nome: 'Impressora', qtde: 0, preco: 549.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 },
];

const getNome = el => el.nome;
const calculaCusto = el => el.qtde * el.preco;

const nomes = carrinho.map( getNome );
const custos = carrinho.map( calculaCusto );

console.log(nomes, custos);

/**
 * Criando nosso próprio map.
 * Para tanto, usamos o Array.prototype, que permite adicionar
 * novas propriedades e métodos aos objetos do tipo Array.
 */
Array.prototype.myMap = function(fn) {
    let i;
    let mapped = [];

    for(i = 0; i < this.length; i++) {
        /* mapped.push( `*${ fn( this[i], i, this ) }` ); */
        mapped.push( fn( this[i], i, this ) );
    }

    return mapped;
}

const nomes2 = carrinho.myMap( getNome );
const custos2 = carrinho.myMap( calculaCusto );

console.log(nomes2, custos2);