const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true },
];

// 1. fragil: true
// 2. qtde * preco = total
// 3. média dos totais

const isFragil = el => el.fragil;
const calculaTotal = el => el.qtde * el.preco;
const calculaMedia = ( total, currentValue, currentIndex, arr ) => total + currentValue/( arr.length );

const calculaMedia2 = function( acc, el ) {
    let novaQtde = acc.qtde + 1;
    let novoTotal = acc.total + el;

    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde,
    }
}

const frageis = carrinho.filter( isFragil );
const totais = frageis.map( calculaTotal );
const media = totais.reduce( calculaMedia, 0 );
const media2 = totais.reduce( calculaMedia2, { qtde: 0, total: 0, media: 0 } );

console.log( frageis, totais, media, media2.media );